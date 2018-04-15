import { CREATE_SHOPPING_LIST } from "./ActionTypes";

export function createShoppingList(listName, storeId, estTotal = 0) {
    return {
        type: CREATE_SHOPPING_LIST,
        listName,
        storeId,
        estTotal
    }
}