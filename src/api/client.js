import axios from "axios";
import { $cookies } from "../plugin/cookies";

const customAxios = axios.create();
customAxios.defaults.baseURL = import.meta.env.VITE_API_LOCATION;
customAxios.defaults.headers = {
  "Content-Type": "application/json;charset=UTF-8",
  Accept: "application/json",
};

customAxios.interceptors.request.use((request) => {
  const token = $cookies.get("token");
  request.headers.Authorization = token ? "Bearer " + token : "";
  return request;
});

export default customAxios;
