import {
  CATEGORIES_FETCHED,
  CATEGORIES_ERROR,
  CATEGORY_CREATED,
} from "../actions/types";

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_FETCHED:
      return payload;
    case CATEGORIES_ERROR:
      return INITIAL_STATE;
    case CATEGORY_CREATED:
      return [payload, ...state];
    default:
      return state;
  }
};
