import { CATEGORIES_FETCHED, CATEGORIES_ERROR } from "../actions/types";

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_FETCHED:
      return payload;
    case CATEGORIES_ERROR:
      return INITIAL_STATE;
    default:
      return state;
  }
};
