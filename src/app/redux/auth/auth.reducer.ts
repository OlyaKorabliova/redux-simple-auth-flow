import { GET_USER, SIGN_IN, SIGN_OUT, SIGN_UP } from "../actionTypes";

const initialState = {
  token: "",
  error: null,
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_USER.SUCCESS: {
      return {
        ...state,
        user: action.payload.data,
        error: null,
      };
    }
    case SIGN_IN.SUCCESS: {
      return {
        ...state,
        token: action.payload.data.token,
        error: null,
      };
    }
    case SIGN_UP.SUCCESS: {
      return {
        ...state,
        error: null,
      };
    }
    case SIGN_IN.ERROR:
    case SIGN_UP.ERROR: {
      return {
        ...state,
        error: action.payload.error,
      };
    }
    case SIGN_OUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
