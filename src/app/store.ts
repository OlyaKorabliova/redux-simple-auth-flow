import { applyMiddleware, createStore, compose } from "redux";
import rootReducer from "./root-reducer";

export default function configureStore() {
  let middleware = [];
  const isDevelopmentMode = process.env.NODE_ENV === "development";
  if (isDevelopmentMode) {
    const logger = require("redux-logger").createLogger({ collapsed: true });
    middleware = [...middleware, logger];
  }

  const composeEnhancers =
    isDevelopmentMode && window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
      ? window["__REDUX_DEVTOOLS_EXTENSION_COMPOSE__"]
      : compose;

  const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(...middleware))
  );

  return store;
}
