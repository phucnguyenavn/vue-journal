import customAxios from "../../api/client";
import { API_LOCATION } from "../../api/ApiLocation";
import { actionTypes, mutationTypes } from "../store-types";

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
    };

    await customAxios
      .post(API_LOCATION.INSTRUCT_JOURNAL_SYNC, userData)
      .then((res) =>
        context.commit(mutationTypes.SetActionJournalSync, res.data.instruction)
      )
      .finally(() => context.commit(mutationTypes.IsLoading, false));
  },
  async [actionTypes.PullJournal](context, payload) {},
  async [actionTypes.PushJournal](context, payload) {
    const journals = {
      payload,
    };
    await customAxios
      .post(API_LOCATION.PUSH_JOURNAL, journals)
      .then(() => context.commit(mutationTypes.ClearModifiedJournals))
      .catch((err) => console.log(err));
  },
};
