import ACTION_TYPES from "./const";

export const toastSuccess = successMessage => ({
  type: ACTION_TYPES.TOAST_SUCCESS_MESSAGE,
  payload: successMessage
});

export const toastError = errorMessage => ({
  type: ACTION_TYPES.TOAST_ERROR_MESSAGE,
  payload: errorMessage
});
