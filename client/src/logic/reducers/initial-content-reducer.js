import {SET_INITIAL_CONTENT, SET_BRANDS} from '.././types';

const initialState ={
    content: {},
    brands:{},
};

export default function (state=initialState, action) {
    switch(action.type){

        case SET_INITIAL_CONTENT:
            return{
                ...state,
                content: action.payload
            };

        case SET_BRANDS:
            return{
                ...state,
                brands: action.payload
            };

        default:
            return state;
    }
}