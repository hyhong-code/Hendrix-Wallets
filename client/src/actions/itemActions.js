import axios from "axios";

import { ITEMS_FETCHED, ITEMS_ERROR } from "./types";

export const getItems = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/item");
    dispatch({ type: ITEMS_FETCHED, payload: res.data.items });
  } catch (error) {
    // console.error(error.response);
    dispatch({ type: ITEMS_ERROR });
  }
};
