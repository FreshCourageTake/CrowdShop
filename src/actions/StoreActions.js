import axios from 'axios';

import { apiBaseUrl } from "../utils/Constants";
import {FETCHING_STORES, FETCHING_STORES_FAILURE, FETCHING_STORES_SUCCESS} from "./ActionTypes";

export function fetchStores() {
    return dispatch => {

        dispatch({ type: FETCHING_STORES });

        return axios.get(`${apiBaseUrl}/store`)
            .then(res => {
                dispatch({ type: FETCHING_STORES_SUCCESS, payload: res.data });
            })
            .catch(err => {
                dispatch({ type: FETCHING_STORES_FAILURE, error: err.data });
            });
    }
}