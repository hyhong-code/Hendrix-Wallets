import axios from "axios";

import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  USER_LOADED,
  AUTH_ERROR,
  USER_LOGOUT,
} from "./types";
import setTokenHeader from "../utils/setTokenHeader";
import { clearCart } from "./cartActions";
import { clearOrder } from "./orderActions";
import { createToast } from "./toastActions";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const signup = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/register", formData, config);
    dispatch({
      type: SIGNUP_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    return true;
  } catch (error) {
    // console.error(error.response);
    dispatch({
      type: SIGNUP_FAILED,
    });
    if (error.response) {
      dispatch(
        createToast(Object.values(error.response.data.errors).join(", "))
      );
    }
    return false;
  }
};

export const login = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/login", formData, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
    dispatch(loadUser());
    return true;
  } catch (error) {
    // console.error(error.response);
    dispatch({
      type: LOGIN_FAILED,
    });
    if (error.response) {
      dispatch(
        createToast(Object.values(error.response.data.errors).join(", "))
      );
    }
    return false;
  }
};

export const loadUser = () => async (dispatch) => {
  setTokenHeader(localStorage.getItem("jwt"));
  try {
    const res = await axios.get("/api/auth/loadme");
    dispatch({
      type: USER_LOADED,
      payload: res.data,
    });
  } catch (error) {
    // console.error(error.response);
    dispatch({
      type: AUTH_ERROR,
    });
  }
};

export const logout = () => (dispatch) => {
  dispatch(clearCart());
  dispatch(clearOrder());
  dispatch({
    type: USER_LOGOUT,
  });
};
