import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import * as authActions from '../redux/auth/auth.actions'
import * as authSelectors from '../redux/auth/auth.selector'


const SignInPage = () => {
  const dispatch = useDispatch();
  const error = useSelector(authSelectors.getError)
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onChange =
    (field: string) =>
    ({ target: { value } }) => {
      const updateData = {
        ...data,
        [field]: value,
      };

      setData(updateData);
    };

  const onSignIn = () => {
    dispatch(authActions.signIn(data.email, data.password));
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", width: "50%" }}>
      <input type="text" placeholder="email" onChange={onChange('email')}/>
      <input type="password" placeholder="password" onChange={onChange('password')}/>
      <button onClick={onSignIn}>SIGN IN</button>
      {error ? <h5 style={{ color: 'red'}}>{error}</h5> : null}
      <p>
        or <Link to="/sign-up">Sign up</Link>
      </p>
    </div>
  );
};

export default SignInPage;
