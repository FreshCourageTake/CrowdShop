import { combineReducers } from 'redux'
import { lists } from './ListReducer'
import { stores } from "./StoreReducer";

export default combineReducers({
    lists: lists,
    stores: stores
});