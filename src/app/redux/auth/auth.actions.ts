import * as actionTypes from "../actionTypes";
import { CALL_API } from "../../api.middleware";

export const signIn = (email: string, password: string) => {
  return {
    [CALL_API]: {
      endpoint: "auth",
      types: actionTypes.SIGN_IN,
      config: {
        method: "post",
        body: JSON.stringify({ email, password }),
      },
      isAuthenticated: false,
    },
  };
};

export const signUp = (data) => {
  return {
    [CALL_API]: {
      endpoint: "users",
      types: actionTypes.SIGN_UP,
      config: {
        method: "post",
        body: JSON.stringify(data),
      },
      isAuthenticated: false,
      additionalDispatches: [signIn(data.email, data.password)],
    },
  };
};

export const getUser = () => {
  return {
    [CALL_API]: {
      endpoint: "users",
      types: actionTypes.GET_USER,
      isAuthenticated: true,
    },
  };
};

export const signOut = () => {
  return {
    type: actionTypes.SIGN_OUT,
  };
};
