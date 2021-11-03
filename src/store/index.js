import { createStore } from "vuex";
import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";
import authModule from "./auth/index";

const store = createStore({
  modules: { auth: authModule },
  state() {
    return {
      isLoading: false,
    };
  },
  actions,
  getters,
  mutations,
});

export default store;
