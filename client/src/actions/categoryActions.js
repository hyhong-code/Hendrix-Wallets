import axios from "axios";

import {
  CATEGORIES_FETCHED,
  CATEGORIES_ERROR,
  CATEGORY_CREATED,
} from "./types";
import { createToast } from "../actions/toastActions";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const getCategories = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/category");
    dispatch({ type: CATEGORIES_FETCHED, payload: res.data.categories });
  } catch (error) {
    // console.error(error.response);
    dispatch({ type: CATEGORIES_ERROR });
  }
};

export const createCategory = (formData, file) => async (dispatch) => {
  const folderName = "hendrix/category";
  const fileName = formData.name;
  const fileType = file.type;

  try {
    const res = await axios.post(
      `/api/category`,
      {
        ...formData,
        fileName: `${folderName}/${fileName}.jpg`,
        fileType,
      },
      config
    );

    const { signedRequest, category } = res.data;

    await fetch(signedRequest, {
      method: "PUT",
      headers: {
        "Content-Type": fileType,
      },
      body: file,
    });

    dispatch({
      type: CATEGORY_CREATED,
      payload: category,
    });
    return true;
  } catch (error) {
    // console.error(error.response);
    if (error.response && error.response.data.errors) {
      dispatch(
        createToast(Object.values(error.response.data.errors).join(", "))
      );
    }
    return false;
  }
};
