import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import authReducer from "./redux/auth/auth.reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: [],
  whitelist: ["auth"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["token"],
};

const rootReducer = combineReducers({
  auth: persistReducer(authPersistConfig, authReducer),
});

export default persistReducer(persistConfig, rootReducer);
