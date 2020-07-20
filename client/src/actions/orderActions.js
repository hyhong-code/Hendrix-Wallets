import axios from "axios";

import {
  ORDER_CREATED,
  ORDER_PAID,
  ORDER_CANCELED,
  ORDERS_FETCHED,
  ORDER_DETAIL_FETCHED,
  CLEAR_ORDER,
  ORDER_ERROR,
  ORDER_SHIPPED,
  ORDER_DELIVERED,
} from "./types";
import { getCart } from "./cartActions";
import { createToast } from "./toastActions";

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
    // console.error(error.response);
    dispatch({ type: ORDER_ERROR });
    if (error.response && error.response.data.errors) {
      dispatch(
        createToast(Object.values(error.response.data.errors).join(", "))
      );
    }
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
    // console.error(error.response);
    dispatch({ type: ORDER_ERROR });
  }
};

export const getOrderDetail = (orderId) => async (dispatch) => {
  try {
    const res = await axios.get(`/api/order/${orderId}`);
    dispatch({
      type: ORDER_DETAIL_FETCHED,
      payload: res.data.order,
    });
  } catch (error) {
    // console.error(error.response);
    dispatch({ type: ORDER_ERROR });
    if (error.response && error.response.data.errors) {
      dispatch(
        createToast(Object.values(error.response.data.errors).join(", "))
      );
    }
  }
};

export const payForOrder = (token, orderId) => async (dispatch) => {
  try {
    const res = await axios.post(
      `/api/order/${orderId}/pay`,
      { token },
      config
    );
    dispatch({
      type: ORDER_PAID,
      payload: res.data.order,
    });
  } catch (error) {
    // console.error(error.response);
    dispatch({ type: ORDER_ERROR });
    if (error.response && error.response.data.errors) {
      dispatch(
        createToast(Object.values(error.response.data.errors).join(", "))
      );
    }
  }
};

export const cancelOrder = (orderId) => async (dispatch) => {
  try {
    const res = await axios.patch(`/api/order/${orderId}/cancel`);
    dispatch({
      type: ORDER_CANCELED,
      payload: res.data.order,
    });
  } catch (error) {
    // console.error(error.response);
    dispatch({ type: ORDER_ERROR });
    if (error.response && error.response.data.errors) {
      dispatch(
        createToast(Object.values(error.response.data.errors).join(", "))
      );
    }
  }
};

export const clearOrder = () => (dispatch) => {
  dispatch({
    type: CLEAR_ORDER,
  });
};

export const getAllOrders = (formData) => async (dispatch) => {
  try {
    let params = [];
    Object.keys(formData).forEach((key) => {
      if (formData[key]) {
        params.push(`${key}=${formData[key]}`);
      }
    });
    params = params.join("&");
    const res = await axios.get(`/api/order/all?${params}`);
    dispatch({
      type: ORDERS_FETCHED,
      payload: res.data,
    });
  } catch (error) {
    // console.error(error.response);
    dispatch({
      type: ORDER_ERROR,
    });
    if (error.response && error.response.data.errors) {
      dispatch(
        createToast(Object.values(error.response.data.errors).join(", "))
      );
    }
  }
};

export const shipOrder = (orderId) => async (dispatch) => {
  try {
    const res = await axios.patch(`/api/order/${orderId}/ship`);
    dispatch({
      type: ORDER_SHIPPED,
      payload: res.data.order,
    });
  } catch (error) {
    console.error(error.response);
    dispatch({ type: ORDER_ERROR });
    if (error.response && error.response.data.errors) {
      dispatch(
        createToast(Object.values(error.response.data.errors).join(", "))
      );
    }
  }
};

export const deliverOrder = (orderId) => async (dispatch) => {
  try {
    const res = await axios.patch(`/api/order/${orderId}/deliver`);
    dispatch({
      type: ORDER_DELIVERED,
      payload: res.data.order,
    });
  } catch (error) {
    console.error(error.response);
    dispatch({ type: ORDER_ERROR });
    if (error.response && error.response.data.errors) {
      dispatch(
        createToast(Object.values(error.response.data.errors).join(", "))
      );
    }
  }
};
