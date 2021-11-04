import axios from "../../api/client";
import { actionTypes, mutationTypes } from "../store-types";
import { $cookies } from "../../plugin/cookies";

const LOGIN = "/auth/login";
const REGISTRATION = "/auth/registration";
const FIND_USER_ID = "/user/find";

export default {
  async [actionTypes.Login](context, payload) {
    context.commit(mutationTypes.IsLoading, true);
    const userInfo = {
      email: payload.email,
      password: payload.password,
    };

    await axios
      .post(LOGIN, userInfo)
      .then((res) => $cookies.set("token", res.headers.authorization));

    await axios
      .post(FIND_USER_ID,{},{ params: { email: userInfo.email } })
      .then((res) => context.commit(mutationTypes.SetUserId, res.data.id))
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
