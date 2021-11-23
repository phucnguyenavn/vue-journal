import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  state() {
    return {
      userJournalId: localStorage.getItem("user-journal-id"),
      actionJournalSync: "",
      modifiedJournals: new Map(),
    };
  },
  actions,
  getters,
  mutations,
};
