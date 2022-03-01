import { applyMiddleware, createStore, compose } from "redux";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

import rootReducer from "./root-reducer";
import apiMiddleware from "./api.middleware";

export default function configureStore() {
  let middleware = [thunk, apiMiddleware];
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

  const persistor = persistStore(store);

  return { store, persistor };
}
