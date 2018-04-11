import { combineReducers } from 'redux'
import { lists } from './ListReducer'

export default combineReducers({
    lists: lists
});