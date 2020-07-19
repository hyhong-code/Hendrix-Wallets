import { combineReducers } from "redux";

import categories from "./categoryReducer";
import items from "./itemReducer";
import auth from "./authReducer";
import cart from "./cartReducer";
import order from "./ordereReducer";
import toasts from "./toastReducer";
import admin from "./adminReducer";

export default combineReducers({
  categories,
  items,
  auth,
  cart,
  order,
  toasts,
  admin,
});
