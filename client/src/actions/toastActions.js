import { uuid } from "uuidv4";

import { CREATE_TOAST, CLEAR_TOAST } from "./types";

export const createToast = (msg, type = "error", duration = 3000) => (
  dispatch
) => {
  const id = uuid();
  dispatch({
    type: CREATE_TOAST,
    payload: {
      msg,
      type,
      id,
    },
  });
  setTimeout(() => {
    dispatch(clearToast(id));
  }, duration);
};

export const clearToast = (id) => (dispatch) => {
  dispatch({
    type: CLEAR_TOAST,
    payload: id,
  });
};
