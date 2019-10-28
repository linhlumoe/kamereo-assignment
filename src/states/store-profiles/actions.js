import ACTION_TYPES from './const';

export const getProfile = id => ({
  type: ACTION_TYPES.GET,
  payload: { id },
});

export const getProfileSuccess = profile => ({
  type: ACTION_TYPES.GET_SUCCESS,
  payload: profile,
});

export const getProfileFailed = () => ({
  type: ACTION_TYPES.GET_FAILED,
});

export const uploadImage = file => ({
  type: ACTION_TYPES.UPLOAD,
  payload: file,
});

export const uploadImageSuccess = imgUrl => ({
  type: ACTION_TYPES.UPLOAD_SUCCESS,
  payload: imgUrl,
});

export const uploadImageFailed = () => ({
  type: ACTION_TYPES.UPLOAD_FAILED,
});

export const updateProfile = (id, data) => ({
  type: ACTION_TYPES.UPDATE,
  payload: { id, data },
});

export const updateProfileSuccess = profile => ({
  type: ACTION_TYPES.UPDATE_SUCCESS,
  payload: profile,
});

export const updateProfileFailed = () => ({
  type: ACTION_TYPES.UPDATE_FAILED,
});
