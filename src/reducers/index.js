import { combineReducers } from "redux";

import movieReducer from "./movieReducer";
import favouritesReducer from "./favouritesReducer";
const rootReducer = combineReducers({
  movieReducer,
  favouritesReducer,
});
export default rootReducer;
