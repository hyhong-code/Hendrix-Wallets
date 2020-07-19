const {ADMIN_LOGGEDIN,ADMIN_ERROR} from '../actions/types.js'

const INITIAL_STATE = {
  adminAuthenticated: false,
  admin,
};

export default (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case ADMIN_LOGGEDIN:
      return {
        ...state,
        adminAuthenticated: true,
      };
    case ADMIN_LOADED:
      return { ...state, adminAuthenticated: true, admin: payload };
    case ADMIN_ERROR:
      return INITIAL_STATE;
    default:
      return state;
  }
};
