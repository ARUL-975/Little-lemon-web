import axios from 'axios';

export const FETCH_SPECIALS_REQUEST = 'FETCH_SPECIALS_REQUEST';
export const FETCH_SPECIALS_SUCCESS = 'FETCH_SPECIALS_SUCCESS';
export const FETCH_SPECIALS_FAILURE = 'FETCH_SPECIALS_FAILURE';

export const fetchSpecials = () => async (dispatch) => {
  dispatch({ type: FETCH_SPECIALS_REQUEST });

  try {
    const response = await axios.get('/api/specials');
    dispatch({ type: FETCH_SPECIALS_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_SPECIALS_FAILURE, error });
  }
};