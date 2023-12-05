import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import cartReducer from "./reducer";
import { thunk } from "redux-thunk";

const store = createStore(
  cartReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
