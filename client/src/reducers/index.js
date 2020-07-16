import { combineReducers } from "redux";

import categories from "./categoryReducer";
import items from "./itemReducer";
import auth from "./authReducer";

export default combineReducers({ categories, items, auth });
