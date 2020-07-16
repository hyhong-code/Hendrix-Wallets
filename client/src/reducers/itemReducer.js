import { ITEMS_FETCHED, ITEMS_ERROR } from "../actions/types";

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ITEMS_FETCHED:
      return payload;
    case ITEMS_ERROR:
      return INITIAL_STATE;
    default:
      return state;
  }
};
