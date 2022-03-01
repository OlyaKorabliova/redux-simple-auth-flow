import axios from "axios";
import { BASE_URL } from "./constants";
import * as authSelectors from "./redux/auth/auth.selector";

export default function configAxios(store) {
  axios.defaults.baseURL = BASE_URL;
  axios.defaults.headers.common["Content-Type"] = "application/json";

  axios.interceptors.request.use(
    async (config) => {
      const accessToken = authSelectors.getAccessToken(store.getState());

      if (!accessToken) {
        return updateAuthorizationHeader(config);
      }

      return updateAuthorizationHeader(config, accessToken);
    },
    (error) => Promise.reject(error)
  );

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      throw error;
    }
  );
}

const updateAuthorizationHeader = (config, accessToken = "") => {
  const _config = config;
  _config.headers.common.Authorization = accessToken ? accessToken : "";
  return _config;
};
