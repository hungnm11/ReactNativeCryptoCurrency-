import axios from 'axios';
import { apiBaseUrl } from '../core/rest-endpoint';
import {
  FETCHING_COIN_DATA,
  FETCH_COIN_SUCCESS,
  FETCH_COIN_FAILURE
} from './types';

export const _fetchData = () => {
  console.log(`${apiBaseUrl}/v1/ticker/?limit=10`)
  return dispatch => {
    dispatch({
      type: FETCHING_COIN_DATA
    })

    return axios.get(`${apiBaseUrl}/v1/ticker/?limit=10`)
                    .then(res =>{
                      dispatch({
                        type: FETCH_COIN_SUCCESS,
                        payload: res.data
                      })
                    })
                    .catch(error => {
                      dispatch({
                        type: FETCH_COIN_FAILURE,
                        payload: error
                      })
                    })
  }
}