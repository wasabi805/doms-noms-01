import {combineReducers} from 'redux';
import initialContentReducer from './initial-content-reducer'

export default combineReducers({
    initialContent: initialContentReducer
});