import { all, takeLatest } from "redux-saga/effects";
import { toastError, toastSuccess } from "./actions";
import ACTION_TYPES from "./const";

function* watchToastSuccessMessage() {
  yield takeLatest(ACTION_TYPES.TOAST_SUCCESS_MESSAGE, toastSuccess);
}

function* watchToastErrorMessage() {
  yield takeLatest(ACTION_TYPES.TOAST_ERROR_MESSAGE, toastError);
}

export default function* globalSagas() {
  yield all([watchToastSuccessMessage(), watchToastErrorMessage()]);
}
