import { combineReducers } from "redux";

import categories from "./categoryReducer";
import items from "./itemReducer";
import auth from "./authReducer";
import cart from "./cartReducer";
import orders from "./ordereReducer";

export default combineReducers({
  categories,
  items,
  auth,
  cart,
  orders,
});
