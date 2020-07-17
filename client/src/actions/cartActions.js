import axios from "axios";

import {
  CART_FETCHED,
  ADDED_TO_CART,
  REMOVED_FROM_CART,
  CART_ERROR,
} from "./types";

export const getCart = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/cart");
    dispatch({
      type: CART_FETCHED,
      payload: res.data.cart,
    });
  } catch (error) {
    console.error(error);
  }
};

export const addItemToCart = (itemId) => async (dispatch) => {
  try {
    const res = await axios.post(`/api/item/${itemId}/cart/`);
    dispatch({
      type: ADDED_TO_CART,
      payload: res.data.cart,
    });
  } catch (error) {
    console.error(error);
  }
};

export const removeItemFromCart = (itemId, cartItemId) => async (dispatch) => {
  try {
    const res = await axios.delete("/api/cart", {
      data: { itemId, cartItemId },
    });

    dispatch({
      type: REMOVED_FROM_CART,
      payload: res.data.cart,
    });
  } catch (error) {
    console.error(error.response);
  }
};
