import { combineReducers } from "redux";

import categories from "./categoryReducer";
import items from "./itemReducer";
import auth from "./authReducer";
import cartItems from "./cartReducer";

export default combineReducers({ categories, items, auth, cartItems });
