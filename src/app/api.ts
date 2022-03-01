import axios from "axios";
import { BASE_URL } from "./constants";

const URL = `${BASE_URL}/api/v1`;

export const signIn = (email: string, password: string) => {
  return axios.post(`${URL}/auth`, {
    email,
    password,
  });
};

export const signUp = (data) => {
  return axios.post(`${URL}/users`, data);
};

export const getUser = () => {
  return axios.get(`${URL}/users`);
};
