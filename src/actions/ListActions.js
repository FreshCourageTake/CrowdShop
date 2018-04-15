import axios from 'axios';

import { apiBaseUrl } from "../utils/Constants";
import { CREATING_SHOPPING_LIST, CREATING_SHOPPING_LIST_SUCCESS, CREATING_SHOPPING_LIST_FAILURE } from "./ActionTypes";

export function createShoppingList(listName, storeId, estTotal = 0) {
    return dispatch => {

        dispatch({ type: CREATING_SHOPPING_LIST });

        axios.get(`${apiBaseUrl}/store/${storeId}`)
            .then((res) => {
                dispatch({
                    type: CREATING_SHOPPING_LIST_SUCCESS,
                    listName: listName,
                    storeId: storeId,
                    storeName: res.data.name,
                    estTotal: estTotal
                });
            })
            .catch((err) => {
                dispatch({ type: CREATING_SHOPPING_LIST_FAILURE, error: err.data });
            })
    }
}