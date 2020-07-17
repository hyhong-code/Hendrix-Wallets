import {
  ORDERS_FETCHED,
  ORDER_CREATED,
  ORDER_DETAIL_FETCHED,
  ORDER_ERROR,
} from "../actions/types";

const INITIAL_STATE = {
  currentOrder: null,
  orders: [],
};

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ORDERS_FETCHED:
      return { ...state, ...payload };
    case ORDER_DETAIL_FETCHED:
      return { ...state, currentOrder: payload };
    case ORDER_CREATED:
      return { ...state, currentOrder: payload };
    default:
      return state;
  }
};
