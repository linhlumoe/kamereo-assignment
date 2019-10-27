import { put, all, call, takeLatest } from "redux-saga/effects";
import profileServices from "services/store-profile";
import { getProfileSuccess, getProfileFailed } from "./actions";
import ACTION_TYPES from "./const";
import toastMessage from "utils/toast";

function* getProfile(action) {
  try {
    const res = yield call(profileServices.get, action.payload);
    console.log("res: ", res);
    const { error } = res;

    if (!error.status && error.message) {
      toastMessage.error(error.message);
    } else {
      yield put(getProfileSuccess(res.data));
    }
  } catch (error) {
    yield put(getProfileFailed());
    console.log("error.message");

    toastMessage.error(error.message);
  }
}

function* watchGetProfile() {
  yield takeLatest(ACTION_TYPES.GET, getProfile);
}

export default function* profileSagas() {
  yield all([watchGetProfile()]);
}
