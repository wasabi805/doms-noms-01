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

    story: Map({
        title: 'Homestyle flavors to your table',
        text: List([
            `Since 2013 we've brought  our family outback flavors and tastes, to tables and events in the Bay Area.`,
            'Whether dining for one or entertaining a group, allow the perfection of your next meal to be (the simplest part of your planning) in the Master Grillers hands.  With matchless homemade sauces and dry spice rub recipes, we guarantee a taste that will surpass your expectations, and please you and your guests.',
            'Using 100% all natural apple, cherry, mesquite, oak, and pecan smoked woods; we deliver unforgettable savory taste.'
        ]),
    }),

    testArr: [1,2,3]
});



