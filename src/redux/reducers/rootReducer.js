import { combineReducers } from "redux";
import { getReducer } from "./getReducer";

export const rootReducer = combineReducers({
  category: getReducer
});