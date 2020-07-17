import axios from "axios";

import {
  ORDER_CREATED,
  ORDER_ERROR,
  ORDERS_FETCHED,
  ORDER_DETAIL_FETCHED,
} from "./types";
import { getCart } from "./cartActions";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const createOrder = (formData, history) => async (dispatch) => {
  try {
    const res = await axios.post("/api/order", formData, config);
    dispatch({
      type: ORDER_CREATED,
      payload: res.data.order,
    });
    dispatch(getCart());
    history.push(`/orderDetail/${res.data.order.id}`);
  } catch (error) {
    console.error(error);
  }
};

export const getOrders = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/order");
    dispatch({
      type: ORDERS_FETCHED,
      payload: res.data,
    });
  } catch (error) {
    console.error(error);
  }
};

export const getOrderDetail = (orderId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/order/${orderId}`);
    console.log(res.data);
    dispatch({
      type: ORDER_DETAIL_FETCHED,
      payload: res.data.order,
    });
  } catch (error) {
    console.error(error);
  }
};
