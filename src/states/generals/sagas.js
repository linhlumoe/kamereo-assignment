import { put, all, call, takeLatest } from 'redux-saga/effects';
import { getCitiesSuccess, getCitiesFailed } from './actions';
import ACTION_TYPES from './const';
import generalService from 'services/general';
import toastMessage from 'utils/toast';

function* getCities() {
  try {
    const res = yield call(generalService.getCities);
    yield put(getCitiesSuccess(res.data));
  } catch (error) {
    yield put(getCitiesFailed());
    toastMessage.error(error.message);
  }
}

function* watchGetCities() {
  yield takeLatest(ACTION_TYPES.GET_CITIES, getCities);
}

export default function* globalSagas() {
  yield all([watchGetCities()]);
}
