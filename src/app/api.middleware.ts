import { BASE_URL } from "./constants";
import * as authSelectors from "./redux/auth/auth.selector";

export const CALL_API = "CALL_API";

const callApi = async (
  endpoint: string,
  isAuthenticated: boolean,
  config?: any,
  token?: string
) => {
  let fullConfig = {
    ...config,
    headers: {
      "Content-Type": "application/json",
    },
  };

  if (isAuthenticated) {
    if (token) {
      fullConfig = {
        ...fullConfig,
        headers: {
          ...fullConfig.headers,
          Authorization: token,
        },
      };
    } else {
      throw new Error("No token saved!");
    }
  }

  return fetch(`${BASE_URL}/api/v1/${endpoint}`, fullConfig)
    .then((res) => {
      if (!res.ok) {
        return Promise.reject("Check network for error");
      }

      return res.json();
    })
    .catch((err) => console.log(err));
};

const apiMiddleware = (store) => (next) => (action) => {
  const accessToken = authSelectors.getAccessToken(store.getState());
  const callApiAction = action[CALL_API];
  if (typeof callApiAction === "undefined") {
    return next(action);
  }

  const { endpoint, types, isAuthenticated, config, additionalDispatches } =
    callApiAction;

  next({ type: types.REQUEST });

  return callApi(endpoint, isAuthenticated, config, accessToken).then(
    (response) => {
      if (additionalDispatches && additionalDispatches.length) {
        additionalDispatches.forEach((actionItem) => {
          store.dispatch(actionItem);
        });
      }
      next({
        type: types.SUCCESS,
        payload: {
          data: response,
        },
      });
    },
    (error) =>
      next({
        type: types.ERROR,
        error: error.message || "Something went wrong..",
      })
  );
};

export default apiMiddleware;
