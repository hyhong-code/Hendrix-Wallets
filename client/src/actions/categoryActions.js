import axios from "axios";
import { CATEGORIES_FETCHED, CATEGORIES_ERROR } from "./types";

export const getCategories = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/category");
    console.log(res.data);
    dispatch({ type: CATEGORIES_FETCHED, payload: res.data.categories });
  } catch (error) {
    console.error(error);
  }
};
