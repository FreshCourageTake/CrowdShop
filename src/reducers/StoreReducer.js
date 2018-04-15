import {
    FETCHING_STORES,
    FETCHING_STORES_SUCCESS,
    FETCHING_STORES_FAILURE
} from "../actions/ActionTypes";

const initialState = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMessage: null
};

export function stores(state = initialState, action) {
    switch(action.type) {
        case FETCHING_STORES:
            return Object.assign({}, state, {
                isFetching: true,
                data: null,
                hasError: false,
                errorMessage: null
            });
        case FETCHING_STORES_SUCCESS:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: false,
                errorMessage: null
            });
        case FETCHING_STORES_FAILURE:
            return Object.assign({}, state, {
                isFetching: false,
                data: action.payload,
                hasError: true,
                errorMessage: action.err
            });
        default:
            return state;
    }
}