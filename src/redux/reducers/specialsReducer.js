import { FETCH_SPECIALS_REQUEST, FETCH_SPECIALS_SUCCESS, FETCH_SPECIALS_FAILURE } from '../actions/specialsActions';

const initialState = {
  specials: [],
  loading: false,
  error: null,
};

export const specialsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_SPECIALS_REQUEST:
      return { ...state, loading: true };
    case FETCH_SPECIALS_SUCCESS:
      return { ...state, loading: false, specials: action.payload };
    case FETCH_SPECIALS_FAILURE:
      return { ...state, loading: false, error: action.error };
    default:
      return state;
  }
};