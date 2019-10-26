import { combineReducers } from "redux";
import storeProfileReducer from "./store-profiles/reducers";

const appReducer = combineReducers({
  storeProfileReducer
});

export default appReducer;
