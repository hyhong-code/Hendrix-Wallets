import { CREATE_TOAST, CLEAR_TOAST } from "../actions/types";

const INITIAL_STATE = [];

export default (state = INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TOAST:
      return [payload, ...state];
    case CLEAR_TOAST:
      return state.filter((toast) => toast.id !== payload);
    default:
      return state;
  }
};
