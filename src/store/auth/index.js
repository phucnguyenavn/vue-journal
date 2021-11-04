import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

export default {
  state() {
    return {
      userId: localStorage.getItem("user-id")
    };
  },
  actions,
  getters,
  mutations,
};
