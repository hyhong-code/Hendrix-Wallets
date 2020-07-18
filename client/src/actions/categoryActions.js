import axios from "axios";

import { CATEGORIES_FETCHED, CATEGORIES_ERROR } from "./types";
import { createToast } from "../actions/toastActions";

export const getCategories = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/category");
    dispatch({ type: CATEGORIES_FETCHED, payload: res.data.categories });
  } catch (error) {
    // console.error(error.response);
    dispatch({ type: CATEGORIES_ERROR });
  }
};
