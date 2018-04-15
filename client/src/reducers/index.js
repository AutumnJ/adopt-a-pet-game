import { combineReducers } from "redux";

import catsReducer from "./catsReducer";
import dogsReducer from "./dogsReducer";

export default combineReducers({
  cats: catsReducer,
  dogs: dogsReducer
});