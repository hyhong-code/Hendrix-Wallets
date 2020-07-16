import {
  CART_FETCHED,
  ADDED_TO_CART,
  REMOVED_FROM_CART,
  CART_ERROR,
} from "../actions/types";

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CART_FETCHED:
    case ADDED_TO_CART:
    case REMOVED_FROM_CART:
      return payload;
    case CART_ERROR:
      return INITIAL_STATE;
    default:
      return state;
  }
};
