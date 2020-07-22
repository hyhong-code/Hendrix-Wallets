import {
  ADMIN_LOGGEDIN,
  ADMIN_ERROR,
  ADMIN_LOADED,
  USER_LOGOUT,
} from "../actions/types.js";
import setTokenHeader from "../utils/setTokenHeader";

const INITIAL_STATE = {
  adminAuthenticated: false,
  admin: null,
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADMIN_LOGGEDIN:
      localStorage.setItem("jwt", payload.token);
      setTokenHeader(payload.token);
      return {
        ...state,
        adminAuthenticated: true,
      };
    case ADMIN_LOADED:
      return { ...state, adminAuthenticated: true, admin: payload.user };
    case ADMIN_ERROR:
    case USER_LOGOUT:
      localStorage.removeItem("jwt");
      setTokenHeader(false);
      return INITIAL_STATE;
    default:
      return state;
  }
};
