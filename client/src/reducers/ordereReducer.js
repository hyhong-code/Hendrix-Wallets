import { ORDER_FETCHED, ORDER_CREATED, ORDER_ERROR } from "../actions/types";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ORDER_FETCHED:
      return payload;
    case ORDER_CREATED:
      return [...state, payload];
    default:
      return state;
  }
};
