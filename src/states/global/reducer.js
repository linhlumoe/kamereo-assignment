import ACTION_TYPES from "./const";

const initialState = {
  successMessage: "",
  errorMessage: ""
};

function globalReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.TOAST_SUCCESS_MESSAGE:
      return { ...state, successMessage: action.payload };
    case ACTION_TYPES.TOAST_ERROR_MESSAGE:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
}

export default globalReducer;
