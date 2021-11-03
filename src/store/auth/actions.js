import axios from "../../api/client";
import { actionTypes, mutationTypes } from "../store-types";
import { $cookies } from "../../plugin/cookies";

const LOGIN = "/auth/login";
const REGISTRATION = "/auth/registration";

export default {
  async [actionTypes.Login](context, payload) {
    context.commit(mutationTypes.IsLoading, true);
    await axios
      .post(LOGIN, {
        email: payload.email,
        password: payload.password,
      })
      .then((res) => $cookies.set("token", res.headers.authorization))
      .finally(() => context.commit(mutationTypes.IsLoading, false));
  },

  async [actionTypes.Registration](context, payload) {
    context.commit(mutationTypes.IsLoading, true);
    await axios
      .post(REGISTRATION, {
        email: payload.email,
        password: payload.password,
      })
      .finally(() => context.commit(mutationTypes.IsLoading, false));
  },
};
