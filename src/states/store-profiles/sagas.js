import { put, all, call, takeLatest } from 'redux-saga/effects';
import profileServices from 'services/store-profile';
import {
  getProfileSuccess,
  getProfileFailed,
  updateProfileSuccess,
  updateProfileFailed,
  uploadImageSuccess,
  uploadImageFailed,
} from './actions';
import ACTION_TYPES from './const';
import toastMessage from 'utils/toast';

function* getProfile(action) {
  try {
    const res = yield call(profileServices.get, action.payload);
    yield put(getProfileSuccess(res.data));
  } catch (error) {
    yield put(getProfileFailed());
    toastMessage.error(error.message);
  }
}

function* watchGetProfile() {
  yield takeLatest(ACTION_TYPES.GET, getProfile);
}

function* updateProfile(action) {
  try {
    const res = yield call(profileServices.update, action.payload);
    yield put(updateProfileSuccess(res.data));
    toastMessage.success('Updated successfully!');
  } catch (error) {
    yield put(updateProfileFailed());
    toastMessage.error(error.message);
  }
}

function* watchUpdateProfile() {
  yield takeLatest(ACTION_TYPES.UPDATE, updateProfile);
}

function* uploadImage(action) {
  try {
    const res = yield call(profileServices.uploadImage, action.payload);
    yield put(uploadImageSuccess(res.data.imageUrl));
  } catch (error) {
    yield put(uploadImageFailed());
    toastMessage.error(error.message);
  }
}

function* watchUploadImage() {
  yield takeLatest(ACTION_TYPES.UPLOAD, uploadImage);
}

export default function* profileSagas() {
  yield all([watchGetProfile(), watchUpdateProfile(), watchUploadImage()]);
}
