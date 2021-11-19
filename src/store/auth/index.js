import { LocalStorage } from "../../common/LocalStorage";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  state() {
    return {
      userId: null,
    };
  },
  actions,
  getters,
  mutations,
};
