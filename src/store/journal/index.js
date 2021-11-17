import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  state() {
    return {
      userJournalId: localStorage.getItem("user-journal-id"),
    };
  },
  actions,
  getters,
  mutations,
};
