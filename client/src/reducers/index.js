import { combineReducers } from "redux";

import categories from "./categoryReducer";
import items from "./itemReducer";

export default combineReducers({ categories, items });
