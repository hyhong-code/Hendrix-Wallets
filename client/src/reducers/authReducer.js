import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  USER_LOADED,
  AUTH_ERROR,
} from "../actions/types";
import setTokenHeader from "../utils/setTokenHeader";

const INITIAL_STATE = {
  isAuthenticated: false,
  user: null,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case LOGIN_SUCCESS:
    case SIGNUP_SUCCESS:
      localStorage.setItem("jwt", payload.token);
      setTokenHeader(payload.token);
      return { ...state, isAuthenticated: true };
    case USER_LOADED:
      return { ...state, isAuthenticated: true, user: payload };
    case LOGIN_FAILED:
    case SIGNUP_FAILED:
    case AUTH_ERROR:
      localStorage.removeItem("jwt");
      setTokenHeader(false);
      return INITIAL_STATE;
    default:
      return state;
  }
};
