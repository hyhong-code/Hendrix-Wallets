import axios from "axios";

import { ITEMS_FETCHED, ITEMS_ERROR, CLEAR_ITEMS } from "./types";

export const getItems = (formData) => async (dispatch) => {
  try {
    let params = [];

    console.log(formData);
    if (formData) {
      Object.keys(formData).forEach((key) => {
        if (formData[key]) {
          params.push(`${key}=${formData[key]}`);
        }
      });
    }
    params = params.length ? params.join("&") : "";
    const res = await axios.get(`/api/item?${params}`);
    console.log(res.data);
    dispatch({ type: ITEMS_FETCHED, payload: res.data.items });
  } catch (error) {
    // console.error(error.response);
    dispatch({ type: ITEMS_ERROR });
  }
};

export const clearItems = () => (dispatch) => {
  dispatch({ type: CLEAR_ITEMS });
};
