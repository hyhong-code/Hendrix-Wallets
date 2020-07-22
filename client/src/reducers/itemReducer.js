import {
  ITEMS_FETCHED,
  ITEMS_ERROR,
  CLEAR_ITEMS,
  ITEM_UPDATED,
  ITEM_CREATED,
} from "../actions/types";

const INITIAL_STATE = null;

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case ITEMS_FETCHED:
      return payload;
    case ITEMS_ERROR:
    case CLEAR_ITEMS:
      return INITIAL_STATE;
    case ITEM_CREATED:
      return [payload, ...state];
    case ITEM_UPDATED:
      return state.map((item) => (item.id !== payload.id ? item : payload));
    default:
      return state;
  }
};
