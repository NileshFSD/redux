import cartQty from "./CartQty";
import addList from "./todo";

import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cartQty,
  addList,
});

export default rootReducer;
