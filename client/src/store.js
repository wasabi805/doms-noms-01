import thunk from 'redux-thunk';
import {applyMiddleware, createStore} from "redux";



import rootReducer from './logic/reducers';
const initialState = {};
const middleware =[thunk];

const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(...middleware));

export default store;