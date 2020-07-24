import axios from "axios";

import {
  ITEMS_FETCHED,
  ITEMS_ERROR,
  CLEAR_ITEMS,
  ITEM_UPDATED,
  ITEM_CREATED,
} from "./types";
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
  } catch (error) {
    // console.error(error.response);
    if (error.response && error.response.data.errors) {
      dispatch(
        createToast(Object.values(error.response.data.errors).join(", "))
      );
    }
  }
};

export const createItem = (formData, file) => async (dispatch) => {
  const folderName = "hendrix/item";
  const fileName = formData.name;
  const fileType = file.type;

  try {
    const res = await axios.post(`/api/category/${formData.categoryId}/item`, {
      ...formData,
      fileName: `${folderName}/${fileName}.jpg`,
      fileType,
    });

    const { signedRequest, item } = res.data;

    await fetch(signedRequest, {
      method: "PUT",
      headers: {
        "Content-Type": fileType,
      },
      body: file,
    });

    console.log(item);

    dispatch({
      type: ITEM_CREATED,
      payload: item,
    });
  } catch (error) {
    // console.error(error.response);
    if (error.response && error.response.data.errors) {
      dispatch(
        createToast(Object.values(error.response.data.errors).join(", "))
      );
    }
  }
};
