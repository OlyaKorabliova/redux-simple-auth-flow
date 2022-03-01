import { useDispatch, useSelector } from "react-redux";
import * as authSelectors from "../redux/auth/auth.selector";
import * as authActions from "../redux/auth/auth.actions";
import { useEffect } from "react";

const UserPage = () => {
  const dispatch = useDispatch();
  const user = useSelector(authSelectors.getUser);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = () => {
    dispatch(authActions.getUser());
  };

  const onSignOut = () => {
    dispatch(authActions.signOut());
  };

  return (
    <div>
      <h2>User page</h2>
      <button onClick={onSignOut} style={{ float: "right" }}>
        SIGN OUT
      </button>
      {user && Object.keys(user).length ? (
        <>
          <h3>Hello, {user.name}</h3>
          <div style={{ display: "flex" }}>
            <img src={user.imageUrl} alt="user" />
            <div>
              <p>Name: {user.name}</p>
              <p>ID: {user.id}</p>
              <p>Email: {user.email}</p>
            </div>
          </div>
        </>
      ) : null}
    </div>
  );
};

export default UserPage;
