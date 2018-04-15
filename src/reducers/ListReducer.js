import shortid from 'shortid'
import {
    CREATING_SHOPPING_LIST,
    CREATING_SHOPPING_LIST_SUCCESS,
    CREATING_SHOPPING_LIST_FAILURE
} from "../actions/ActionTypes";

const initialState = {
    isFetching: null,
    data: [],
    hasError: false,
    errorMessage: null
};

export function lists(state = initialState, action) {
    switch (action.type) {
        case CREATING_SHOPPING_LIST:
            const uniqueId = shortid.generate();
            return {
                isFetching: true,
                data: [...state.data],
                hasError: false,
                errorMessage: null
            };
        case CREATING_SHOPPING_LIST_SUCCESS:
            return {
                isFetching: false,
                data: [
                    ...state.data,
                    {
                        id: uniqueId,
                        listName: action.listName,
                        storeId: action.storeId,
                        storeName: action.storeName,
                        estTotal: action.estTotal
                    }
                ],
                hasError: false,
                errorMessage: null
            };
        case CREATING_SHOPPING_LIST_FAILURE:
            return {
                isFetching: false,
                data: [...state.data],
                hasError: true,
                errorMessage: action.error
            };
        default:
            return state;
    }
}