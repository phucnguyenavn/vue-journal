import { mutationTypes } from "./store-types";

export default {
  [mutationTypes.IsLoading](state, payload) {
    state.isLoading = payload;
  },
};
