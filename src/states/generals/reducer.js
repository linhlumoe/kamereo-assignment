import ACTION_TYPES from './const';

const initialState = {
  cities: [],
  loading: false,
};

function generalReducer(state = initialState, action) {
  switch (action.type) {
    case ACTION_TYPES.GET_CITIES:
      return { ...state, loading: true };
    case ACTION_TYPES.GET_CITIES_SUCCESS:
      return { ...state, cities: action.payload, loading: false };
    case ACTION_TYPES.GET_CITIES_FAILED:
      return { ...state, loading: false };
    default:
      return state;
  }
}

export default generalReducer;
