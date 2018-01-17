import {
  FETCHING_COIN_DATA,
  FETCH_COIN_SUCCESS,
  FETCH_COIN_FAILURE
} from '../actions/types';

const initialState = {
  isFetching: null,
  data: [],
  hasError: false,
  errorMessage: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCHING_COIN_DATA:
      return {
        ...state,
        isFetching: true,
      }
    case FETCH_COIN_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload
      }
    case FETCH_COIN_FAILURE:
      return {
        ...state,
        isFetching: false,
        hasError: true,
        errorMessage: action.payload
      }
    default:
      return state;
  }
}