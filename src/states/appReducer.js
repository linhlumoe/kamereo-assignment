import { combineReducers } from "redux";
import globalReducer from "./global/reducer";
import storeProfileReducer from "./store-profiles/reducer";

const appReducer = combineReducers({
  global: globalReducer,
  storeProfile: storeProfileReducer
});

export default appReducer;
