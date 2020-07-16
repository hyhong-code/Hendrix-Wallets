import axios from "axios";

import {
  LOGIN_SUCCESS,
  LOGIN_FAILED,
  SIGNUP_SUCCESS,
  SIGNUP_FAILED,
  USER_LOADED,
  AUTH_ERROR,
} from "./types";

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
  } catch (error) {
    console.error(error.response);
    dispatch({
      type: SIGNUP_FAILED,
    });
  }
};

export const login = (formData) => async (dispatch) => {
  try {
    const res = await axios.post("/api/auth/login", formData, config);
    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.error(error.response);
    dispatch({
      type: LOGIN_FAILED,
    });
  }
};
