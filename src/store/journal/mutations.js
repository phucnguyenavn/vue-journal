import { mutationTypes } from "../store-types";

export default {
  [mutationTypes.SetUserJournalId](state, payload) {
    state.userJournalId = payload;
    localStorage.setItem("user-journal-id", payload);
  },
  [mutationTypes.SetActionJournalSync](state, payload) {
    state.actionJournalSync = payload;
  },
  [mutationTypes.AppendModifiedJournals](state, payload) {
    console.log(payload);
    state.modifiedJournals.push(payload);
  },
  [mutationTypes.ClearModifiedJournals](state) {
    state.modifiedJournals = [];
  },
};
