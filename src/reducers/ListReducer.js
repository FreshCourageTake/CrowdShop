import shortid from 'shortid'
import {
    CREATE_SHOPPING_LIST
} from "../actions/ActionTypes";

export function lists(state = [], action) {
    switch (action.type) {
        case CREATE_SHOPPING_LIST:
            const uniqueId = shortid.generate();
            return [
                ...state,
                {
                    id: uniqueId,
                    listName: action.listName,
                    storeId: action.storeId,
                    estTotal: action.estTotal
                }
            ];
        default:
            return state;
    }
}