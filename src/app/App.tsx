import { Provider, useSelector } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import UserPage from "./components/UserPage";
import configureStore from "./store";
import configAxios from "./configAxios";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import * as authSelectors from "./redux/auth/auth.selector";

const { store, persistor } = configureStore();
configAxios(store);

const ProtectedRoutes = () => {
  return (
    <Routes>
      <Route path="/user" element={<UserPage />} />
      <Route path="*" element={<Navigate to="/user" />} />
    </Routes>
  );
};

const PublicRoutes = () => {
  return (
    <Routes>
      <Route path="/sign-up" element={<SignUpPage />} />
      <Route path="/" element={<SignInPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

const RegisteredRoutes = () => {
  const isSignedIn = useSelector(authSelectors.isSignedIn);

  return isSignedIn ? <ProtectedRoutes /> : <PublicRoutes />;
};

function App() {
  return (
    <BrowserRouter>
      <Provider store={store}>
        <PersistGate loading={<h3>loading...</h3>} persistor={persistor}>
          <RegisteredRoutes />
        </PersistGate>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
