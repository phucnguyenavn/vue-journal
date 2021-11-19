import { LocalStorage } from "../../common/LocalStorage";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  state() {
    return {
      userJournalId: LocalStorage.getUserJournalId,
      actionJournalSync: "",
      modifiedJournals: [],
    };
  },
  actions,
  getters,
  mutations,
};
