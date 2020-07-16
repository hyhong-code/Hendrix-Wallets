import axios from "axios";

import {
  CART_FETCHED,
  ADDED_TO_CART,
  REMOVED_FROM_CART,
  CART_ERROR,
} from "./types";

export const getCartItems = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/cart");

    console.log(res.data);

    dispatch({
      type: CART_FETCHED,
      payload: res.data.cart,
    });
  } catch (error) {
    console.error(error);
  }
};
