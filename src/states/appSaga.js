import { all } from "redux-saga/effects";
import profileSagas from "./store-profiles/sagas";
import globalSagas from "./global/sagas";

export default function* appSaga() {
  yield all([profileSagas(), globalSagas()]);
}
