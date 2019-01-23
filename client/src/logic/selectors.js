import {SET_INITIAL_CONTENT, SET_LOGO, SET_BRANDS} from './types';

import * as Constants from './reducers/constants'

export const load_initial_content = ()=>{
    return{
        type: SET_INITIAL_CONTENT,
        payload: 'can you see me? Im the payload from selector'
    }
};

export const getLogo = ()=>{
    return{
        type: SET_LOGO,
        payload: '.././00-assets/img/logo.png'
    }
};

export const getBrands = () =>{
    return{
        type: SET_BRANDS,
        payload: Constants.INITIAL_STATE.get('info').toJS().social
    }
};

