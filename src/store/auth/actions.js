import axios from "../../api/client";
import { API_LOCATION } from "../../api/ApiLocation";
import { actionTypes, mutationTypes } from "../store-types";
import { $cookies } from "../../plugin/cookies";


export default {
  async [actionTypes.Login](context, payload) {
    context.commit(mutationTypes.IsLoading, true);
    const userInfo = {
      email: payload.email,
      password: payload.password,
    };

    await axios
      .post(API_LOCATION.LOGIN, userInfo)
      .then((res) => $cookies.set("token", res.headers.authorization));

    await axios
      .post(API_LOCATION.FIND_USER_ID, {}, { params: { email: userInfo.email } })
      .then((res) => context.commit(mutationTypes.SetUserId, res.data.id));
  },

  async [actionTypes.Registration](context, payload) {
    context.commit(mutationTypes.IsLoading, true);
    await axios
      .post(API_LOCATION.REGISTRATION, {
        email: payload.email,
        password: payload.password,
      })
      .finally(() => context.commit(mutationTypes.IsLoading, false));
  },
};
