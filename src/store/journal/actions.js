import customAxios from "../../api/client";
import { API_LOCATION } from "../../api/ApiLocation";
import { actionTypes, mutationTypes } from "../store-types";
import { addDB } from "../db/indexedDB";

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
    const userData = {
      userId: payload.userId,
      id: payload.userJournalId,
      journalLength: payload.journalLength,
    };

    await customAxios
      .post(API_LOCATION.INSTRUCT_JOURNAL_SYNC, userData)
      .then((res) =>
        context.commit(mutationTypes.SetActionJournalSync, res.data.instruction)
      )
      .finally(() => context.commit(mutationTypes.IsLoading, false));
  },

  async [actionTypes.PullJournal](context, payload) {
    const journals = {
      userId: payload.userId,
      userJournalId: payload.userJournalId,
    };
    await customAxios
      .post(API_LOCATION.PULL_JOURNAL, journals)
      .then((res) => {
        if (res.data.journals.length !== 0) {
          
          for (let i = 0; i < res.data.journals.length; i++) {
            addDB(journals[i]);
          }
        }
      })
      .catch((err) => console.log(err));
  },

  async [actionTypes.PushJournal](context, payload) {
    const journals = {
      userId: payload.userId,
      userJournalId: payload.userJournalId,
      journals: await payload.journals,
    };
    await customAxios
      .post(API_LOCATION.PUSH_JOURNAL, journals)
      .then((res) => {
        if (res.status === 200) {
          context.commit(mutationTypes.ClearModifiedJournals);
        }
      })
      .catch((err) => console.log(err));
  },
};
