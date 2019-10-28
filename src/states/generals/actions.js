import ACTION_TYPES from './const';

export const getCities = () => ({
  type: ACTION_TYPES.GET_CITIES,
});

export const getCitiesSuccess = cities => ({
  type: ACTION_TYPES.GET_CITIES_SUCCESS,
  payload: cities,
});

export const getCitiesFailed = () => ({
  type: ACTION_TYPES.GET_CITIES_FAILED,
});
