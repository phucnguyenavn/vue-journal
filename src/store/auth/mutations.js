import { mutationTypes } from "../store-types";

export default {
  [mutationTypes.SetUserId](state, payload) {
    state.userId = payload;
    localStorage.setItem("user-id",payload);
  },
};
