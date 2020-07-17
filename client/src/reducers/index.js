import { combineReducers } from "redux";

import categories from "./categoryReducer";
import items from "./itemReducer";
import auth from "./authReducer";
import cart from "./cartReducer";
import order from "./ordereReducer";

export default combineReducers({
  categories,
  items,
  auth,
  cart,
  order,
});
