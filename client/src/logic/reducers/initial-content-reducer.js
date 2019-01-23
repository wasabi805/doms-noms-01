import {SET_INITIAL_CONTENT} from '.././types'

const initialState ={
    content: {}
};

export default function (state=initialState, action) {
    switch(action.type){

        case SET_INITIAL_CONTENT:
            return{
                ...state,
                content: action.payload
            };

        default:
            return state;
    }
}