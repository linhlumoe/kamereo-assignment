import { combineReducers } from 'redux';
import generalReducer from './generals/reducer';
import storeProfileReducer from './store-profiles/reducer';

const appReducer = combineReducers({
  general: generalReducer,
  storeProfile: storeProfileReducer,
});

export default appReducer;
