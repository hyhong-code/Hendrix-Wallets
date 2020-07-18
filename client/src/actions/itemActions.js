import axios from "axios";

import { ITEMS_FETCHED, ITEMS_ERROR } from "./types";
import { createToast } from "../actions/toastActions";

export const getItems = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/item");
    dispatch({ type: ITEMS_FETCHED, payload: res.data.items });
  } catch (error) {
    dispatch({ type: ITEMS_ERROR });
    if (error.response) {
      dispatch(
        createToast(Object.values(error.response.data.errors).join(", "))
      );
    }
  }
};
