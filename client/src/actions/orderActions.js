import axios from "axios";

import { ORDER_CREATED, ORDER_ERROR, ORDERS_FETCHED } from "./types";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

export const createOrder = (formData, history) => async (dispatch) => {
  try {
    const res = await axios.post("/api/order", formData, config);

    console.log(res.data);
    dispatch({
      type: ORDER_CREATED,
      payload: res.data.order,
    });
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
