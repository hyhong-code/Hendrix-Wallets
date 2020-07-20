import axios from "axios";

import { ADMIN_LOGGEDIN, ADMIN_ERROR } from "./types";
import { loadUser } from "./authActions";
import { createToast } from "../actions/toastActions";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const adminLogin = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/login/admin", formData, config);
    dispatch({
      type: ADMIN_LOGGEDIN,
      payload: res.data,
    });
    dispatch(loadUser());
    return true;
  } catch (error) {
    // console.error(error.response);
    dispatch({
      type: ADMIN_ERROR,
    });
    if (error.response && error.response.data.errors) {
      dispatch(
        createToast(Object.values(error.response.data.errors).join(", "))
      );
    }
    return false;
  }
};
