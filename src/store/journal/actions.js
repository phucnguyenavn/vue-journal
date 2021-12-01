import customAxios from "../../api/client";
import { API_LOCATION } from "../../api/ApiLocation";
import { actionTypes, mutationTypes } from "../store-types";
import { addJournal } from "../db/indexedDB";

export default {
  async [actionTypes.FindUserJournalId](context, payload) {
    await customAxios
      .post(
        API_LOCATION.FIND_USER_JOURNAL_ID,
        {},
        { params: { userId: payload } }
      )
      .then((res) =>
        context.commit(mutationTypes.SetUserJournalId, res.data.id)
      );
  },

  async [actionTypes.InstructJournalSync](context, payload) {
    const userJournal = {
      syncIdDto: payload.syncId,
      journalLength: payload.journalLength,
    };

    await customAxios
      .post(API_LOCATION.INSTRUCT_JOURNAL_SYNC, userJournal)
      .then((res) =>
        context.commit(mutationTypes.SetActionJournalSync, res.data.instruction)
      )
      .finally(() => context.commit(mutationTypes.IsLoading, false));
  },

  async [actionTypes.PullJournal](context, payload) {
    await customAxios
      .post(API_LOCATION.PULL_JOURNAL, payload.syncId)
      .then((res) => {
        if (res.data !== undefined) {
          for (let i = 0; i < res.data.length; i++) {
            addJournal(res.data[i]);
            console.log(res.data);
          }
        }
      })
      .catch((err) => console.log(err));
  },

  async [actionTypes.PushJournal](context, payload) {
    let journals = await payload.journals;
    console.log(journals);
    const userJournal = {
      syncIdDto: payload.syncId,
      journals:  JSON.parse(JSON.stringify(Array.from(journals))),
    };
    if (userJournal.journals.length !== 0) {
      await customAxios
        .post(API_LOCATION.PUSH_JOURNAL, userJournal)
        .then((res) => {
          if (res.status === 200) {
            context.commit(mutationTypes.ClearModifiedJournals);
          }
        })
        .catch((err) => console.log(err));
    }
  },
};
