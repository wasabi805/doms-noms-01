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

    services: List([
        Map({
            title: 'Catering',
            fa_icon: 'utensils',
            description: `The best way to enjoy your event, is to spend time with those who attended. Don't get stuck preparing a meal and missing all the action. Let our team cater your next event!`,
        }),
        Map({
            title: 'Events',
            fa_icon: 'glass-cheers', //need pro version
            description: `Whether a Backyard BBQ , Family Reunion, or Open House, we can bring the event to you! With access to tent, chair, table and linen rentals- we are the ONLY call you need to make before your event starts.`
        }),
        Map({
            title: 'Drop off',
            fa_icon: 'truck',
            description: `Don’t want the hassle of sparking up the grill before the party arrives?  We've got you covered. We'll drop off a prepared meal, allowing  you and your guests to enjoy great food and the company of each other.`,
        }),
    ]),

    food_menu_content:List([
        {title: 'Appetizers',
            courses:[
                {name: 'Nachos', descrip: 'Cash rules everything around me C.R.E.A.M. get the money,dollar dollar bill, yall ', price: '10.00'},
                {name: 'Fries', descrip: 'These are the muchiest nachos.', price: '6.75'}
            ]
        },

        {title: 'Sides',
            courses:[
                {name: 'Cole-Slaw', descrip: 'Those little soft chewy guys', price: '10.00'},
                {name: 'Mac And Cheese', descrip: 'Break me of a piece of that kit-kat bar.', price: '7.00'},
                {name: 'Cornbread', descrip: 'Gimmie yo cornbread!', price: '7.00'},
                {name: 'Beans and Franks', descrip: 'The more you eat the more you toot', price: '7.00'},
                {name: 'Grilled Veggies', descrip: 'The garden variety', price: '7.00'}
            ]
        },

        {title: 'The Meat',
            courses:[
                {name: 'Ribs', descrip: 'Mmmm MM Mm! Get that Itis!', price: '10.00'},
                {name: 'Brisket', descrip: 'So Fresh We literally just shot the cow!', price: '7.00'},
                {name: 'Chicken', descrip: 'Who doesnt like Chicken?', price: '7.00'},
                {name: 'Burnt Ends', descrip: 'So delicious', price: '7.00'}
            ]
        },

        {title: 'Drinks',
            courses:[
                {name: 'Pepsi', descrip: 'Those little soft chewy guys', price: '10.00'},
                {name: 'Sprite', descrip: 'Break me of a piece of that kit-kat bar.', price: '7.00'}
            ]
        }
    ]),

    food_menu_footer: {logo: '../../public/bin/img/logo.png' , text: ' * All prices include taxes *' },

    gallery: Map({
        title: 'Gallery',

        images: [
            '/static/media/chicken.1e537c45.jpg',
            '/static/media/ribs.83d5a663.jpg',
            '/static/media/rig.5cb8416e.jpg',
            '/static/media/spice.1768228e.jpg',
            '/static/media/chicken.1e537c45.jpg',
            '/static/media/ribs.83d5a663.jpg',
            '/static/media/rig.5cb8416e.jpg',
            '/static/media/spice.1768228e.jpg',
        ]
    }),

    about_us: Map({
        domino: '/static/media/domino.84b6a9e8.jpg',
        text: 'Stuff About Domino'
    }),

    contact: Map({
        form: Map({
            name: Map({
                input: '',
                hasError: false,
            }),
            phone: Map({
                input: '',
                hasError: false,
            }),
            email: Map({
                input: '',
                hasError: false,
            }),
            subject: Map({
                input: '',
                hasError: false,
            }),
            message: Map({
                input: '',
                hasError: false,
            }),
        }),
        error: '',
    }),

    testArr: [1,2,3,4]
});



