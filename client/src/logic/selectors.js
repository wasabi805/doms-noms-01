import {SET_INITIAL_CONTENT} from './types';

export const load_initial_content = ()=>{
    return{
        type: SET_INITIAL_CONTENT,
        payload: 'can you see me? Im the payload from selector'
    }
};