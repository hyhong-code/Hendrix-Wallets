import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import reduxThunk from "redux-thunk";
import rootReducer from "./reducers/index";

const middlewares = [reduxThunk];

export default createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares))
);
