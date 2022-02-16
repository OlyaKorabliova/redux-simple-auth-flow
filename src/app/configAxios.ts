import axios from "axios";
import { BASE_URL } from "./constants";

export default function configAxios() {
  axios.defaults.baseURL = BASE_URL;
  axios.defaults.headers.common["Content-Type"] = "application/json";

  axios.interceptors.request.use(
    (config) => {
      return config;
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
