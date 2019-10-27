import ACTION_TYPES from "./const";

const initialState = {
  profile: {},
  loading: false
};

function storeProfileReducer(state = initialState, action) {
  console.log("action-reducer: ", action);

  switch (action.type) {
    case ACTION_TYPES.GET:
      return { ...state, loading: true };
    case ACTION_TYPES.GET_SUCCESS:
      return { ...state, loading: false, profile: action.payload };
    case ACTION_TYPES.GET_FAILED:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export default storeProfileReducer;
