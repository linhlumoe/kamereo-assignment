import ACTION_TYPES from './const';

const initialState = {
  profile: {},
  loading: false,
  uploadedUrl: '',
};

function storeProfileReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET:
      return { ...state, loading: true };
    case ACTION_TYPES.GET_SUCCESS:
      return { ...state, loading: false, profile: action.payload };
    case ACTION_TYPES.GET_FAILED:
      return { ...state, loading: false };
    case ACTION_TYPES.UPDATE:
      return { ...state, loading: true };
    case ACTION_TYPES.UPDATE_SUCCESS:
      return { ...state, loading: false, profile: action.payload };
    case ACTION_TYPES.UPDATE_FAILED:
      return { ...state, loading: false };
    case ACTION_TYPES.UPLOAD:
      return { ...state, loading: true };
    case ACTION_TYPES.UPLOAD_SUCCESS:
      return { ...state, loading: false, uploadedUrl: action.payload };
    case ACTION_TYPES.UPLOAD_FAILED:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export default storeProfileReducer;
