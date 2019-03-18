import thunk from 'redux-thunk';
import {combineReducers, applyMiddleware, createStore} from "redux";

import Logic from './logic/reducer/reducer'

const middleware =[thunk];

const store = createStore(
    combineReducers({
        Logic
    }),
    applyMiddleware(...middleware));

export default store;