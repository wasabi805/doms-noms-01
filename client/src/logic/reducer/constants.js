import {Map, List} from 'immutable';
export const SET = 'SET';

export const INITIAL_STATE = Map({
    info: Map({
        social: List([
            Map({name: 'facebook',  link:'https://www.facebook.com/domino.corcega/'}),
            Map({name: 'instagram', link:'https://www.instagram.com/dcorcega00/'}),
            Map({name: 'yelp',      link:'https://www.yelp.com/'}),
        ])
    }),

    testArr: [1,2,3]
});



