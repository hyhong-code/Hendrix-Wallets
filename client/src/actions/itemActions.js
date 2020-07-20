import axios from "axios";

import { ITEMS_FETCHED, ITEMS_ERROR, CLEAR_ITEMS, ITEM_UPDATED } from "./types";
import { createToast } from "./toastActions";

export const getItems = (formData) => async (dispatch) => {
  try {
    let params = [];
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

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const updateItem = (itemId, formData) => async (dispatch) => {
  try {
    const res = await axios.patch(`/api/item/${itemId}`, formData, config);
    dispatch({
      type: ITEM_UPDATED,
      payload: res.data.item,
    });
    console.log(res.data);
  } catch (error) {
    // console.error(error.response);
    if (error.response && error.response.data.errors) {
      dispatch(
        createToast(Object.values(error.response.data.errors).join(", "))
      );
    }
  }
};
