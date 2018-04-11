import { CREATE_SHOPPING_LIST } from "./ActionTypes";

export function createShoppingList(listName, storeName, estTotal = 0) {
    return {
        type: CREATE_SHOPPING_LIST,
        listName,
        storeName,
        estTotal
    }
}