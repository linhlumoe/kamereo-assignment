import ACTION_TYPES from "./const";

export const getProfile = id => ({
  type: ACTION_TYPES.GET,
  payload: { id }
});

export const getProfileSuccess = profile => ({
  type: ACTION_TYPES.GET_SUCCESS,
  payload: profile
});

export const getProfileFailed = () => ({
  type: ACTION_TYPES.GET_FAILED
});
