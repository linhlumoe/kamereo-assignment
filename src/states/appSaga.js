import { all } from 'redux-saga/effects';
import profileSagas from './store-profiles/sagas';
import generalSagas from './generals/sagas';

export default function* appSaga() {
  yield all([profileSagas(), generalSagas()]);
}
