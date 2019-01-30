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

    package:Map({

        page_header:Map({
            page_01: Map({title : '| Private Events |' , text :"( Minimum of 20 Adults)"}),
            page_02: Map({title : '| Private Events |' , text :"(continued)"}),
            page_03: Map({title : '| Corporate Catered Events |' , text :"( Minimum of 20 Adults)"}),
            page_04: Map({title : '| Corporate Catered Events |' , text :"(continued)"}),
            page_05: Map({title : "| We'll Get Your Event Turnt Up! |" , text :"Let us be your one stop shop!"}),
            page_06: Map({title : "| Additional Services |" , text :""}),
        }),

        page_01: Map({

            packages:[
                {title: 'Backyard' , text: "includes 2 appetizers, 2 choices of meat , 2 sides and 1 desert."},
                {title: 'Classic BBQ' , text: "includes 2 appetizers, 3 choices of meat , 2 sides and 1 desert."},
                {title: "Dom's Noms " , text: "includes 2 appetizers, 4 choices of meat , 2 sides and 1 desert."},
            ],

            course:[
                { name: "Appetizer",
                   course_list: [
                       {item: "Lumpia - Traditional Filipino pork egg roll"},
                       {item: "Smoked bacon wrapped scallops"},
                       {item: "Chicken Wings - BBQ, Spicy or Sweet"},
                       {item: "Fresh Tortilla Chips w/ signature salsa & guacamole"},
                       {item: "Spinach Dip" },
                       {item: "Pita Bread, Chips & Hummus"},
                       {item: "Cheese Platter"},
                       {item: "Veggie Platter"},
                   ]
               },
                {
                    name: "Salads",
                    course_list:[
                        {item : 'Classic Ceasar - Romaine, croutons, parmesan cheese'},
                        {item : 'Waldorf - Apples, grapes, celery & chopped walnuts'},
                        {item : 'Organic Mixed - Cherry Tomatoes, sliced cucumber, citrus vinaigrette'},
                        {item : 'Pasta Salad - Red bell pepper, onion, olives, raspberry vinaigrette'},
                        {item : "Dom's Potato Salad"},
                    ]
                }
            ]
        }),

        //START PAGE 2 HERE
        page_02: Map({

            course:[
                { name: "Meats",
                    course_list: [
                        {item: "Grilled Beef Fajitas w/ sautéed onion & peppers "},
                        {item: "Applewood Pork Spareribs - St. Louis pork spareribs smoked for 8 hours"},
                        {item: "Jerk Chicken - Marinated in Authentic Caribbean spices "},
                        {item: "DOM's NOMS Pulled Pork - All Natural bone in pork butt charred & smoked for 10 hrs"},
                        {item: "Grilled Pork Belly - Grilled & served w/ soy, ginger, & vinaigrette" },
                        {item: "Smoked Pork Belly - Served w/ signature soy & bourbon sauce "},
                        {item: "Gourmet Veggie Burgers"},
                        {item: "Angus Beef Burgers"},
                    ]
                },
                {
                    name: "Sides",
                    course_list:[
                        {item : "Balut : Only for the bold : )"},
                        {item : "DOM's NOMS Baked Beans"},
                        {item : 'Kale Slaw - Cranberries, carrots, almonds, & house vinaigrette'},
                        {item : 'Season Grilled Vegetables'},
                        {item : 'Loaded Creamy Mac & Cheese'},
                        {item : "Creamy Cole Slaw - Cabbage & Carrots in a mayo & sour cream base"},
                        {item : "Corn on the Cobb"},
                        {item : "Crisetelie's Corn Muffin"},
                    ]
                },

                {
                    name: "Desserts",
                    course_list:[
                        {item : "Fruit Salad"},
                        {item : 'Halo Halo'},
                        {item : 'Homemade Cookies'},
                        {item : 'Assorted Cupcakes - Vanilla or Chocolate'},
                    ]
                }
            ]
        }),

        page_03a: Map({

            course:[
                { name: "Casual Appetizer Station",
                    course_list: [
                        {item: "*Includes cocktail napkins & frills"},

                    ]
                },
                {
                    name: "Chose from Three of the following items: ",
                    course_list:[
                        {item : "Seasonal Fruit Platter"},
                        {item : "Cheese & Cracker Platter"},
                        {item : 'Fresh or Grilled Vegetable Platter'},
                        {item : 'Charcuterie Platter'},
                        {item : 'Antipasto'},
                        {item : "Lavosh Platter"},
                        {item : "Hummus Platter"},
                    ]
                },

            ]
        }),

        page_03b: Map({

            course:[
                {
                    name: "Standard Appetizer Station",
                    course_list:[
                        {item : "*An elegant displayed appetizer station, includes platters & chafing dishes"},

                    ]
                },

                {
                    name: "Choose four of the following:",
                    course_list:[
                        {item : "Thai Chicken Skewers w/ peanut sauce"},
                        {item : "Yakitori Beef Skewers w/ teriyaki sauce"},
                        {item : " ."},
                        {item : "Savory Meatballs & Gravy"},
                        {item : "Beef Wellington"},
                        {item : "Bruschetta"},
                        {item : "Mini Crab Cakes w/lemon aioli"},
                        {item : "Caprese Skewers w/ balsamic reduction"},

                    ]
                },
            ]
        }),

        page_04: Map({

            course:[
                { name: "Entrees",
                    course_list: [
                        {item: "Seared Salmon w/ Beurre Blanc "},
                        {item: "Herb Roasted Chicken w/ Marsala Sauce"},
                        {item: "Seared Sirloin Steak w/ Mushroom peppercorn Sauce "},
                        {item: "Roasted Ribeye with Au jus"},
                        {item: "Marinated Pork Loin w/balsamic, cranberry sauce" },
                        {item: "Eggplant Parmesan "},
                    ]
                },

                {
                    name: "Salads",
                    course_list:[
                        {item : "*Choose Two"},
                        {item : "."},
                        {item : "Mix Green Salad"},
                        {item : "Classic Ceaser"},
                        {item : "Arugala"},
                        {item : "Frisee"},
                    ]
                },

                {
                    name: "Side Dishes",
                    course_list:[
                        {item : "*Choose Two"},
                        {item : "."},
                        {item : "Roasted Seasonal Vegetables"},
                        {item : "Sautee'd Aricovert"},
                        {item : "Roasted Red Potatoes"},
                        {item : "Garlic or Classic Mashed Potatoes"},
                        {item : "Wild Rice Pilaf"},
                    ]
                },

                {
                    name: "Desserts",
                    course_list:[
                        {item : "*Choose Three"},
                        {item : '.'},
                        {item : 'Hand Dipped Chocolate Strawberries'},
                        {item : 'Brownies'},
                        {item : 'Apple Pie'},
                        {item : 'Chocolate Mousee'},
                        {item : 'Fruit Tarts'},
                        {item : 'Assorted Cupcakes'},
                    ]
                },

                {
                    name: "Assorted Beverages",
                    course_list:[
                        {item : "Iced Tea"},
                        {item : "Coke"},
                        {item : "Sprite"},
                        {item : "Diet Coke"},
                    ]
                },

                {
                    name: "Coffee Service",
                    course_list:[
                        {item : "*includes disposable cups, stirs, creamer & sugar"},
                    ]
                }
            ]
        }),

        page_05: Map({

            course:[
                { name: "We'll Turn up Your Event!",
                    course_list: [
                        {item: "TBD"},

                    ]
                },
                {
                    name: "Content: ",
                    course_list:[
                        {item : "I hear the drums echoing tonight\n" +
                            "But she hears only whispers of some quiet conversation\n" +
                            "She's coming in, 12:30 flight\n" +
                            "The moonlit wings reflect the stars that guide me towards salvation\n" +
                            "I stopped an old man along the way\n" +
                            "Hoping to find some long forgotten words or ancient melodies\n" +
                            "He turned to me as if to say, \"Hurry boy, it's waiting there for you\"\n" +
                            "It's gonna take a lot to take me away from you\n" +
                            "There's nothing that a hundred men or more could ever do\n" +
                            "I bless the rains down in Africa\n" +
                            "Gonna take some time to do the things we never had"},
                    ]
                },

            ]
        }),

        page_06: Map({

            course:[
                { name: "Wait Staffing",
                    course_list: [
                        {item: "$25/hr - 4hr minimum"},
                    ]
                },
                {
                    name: "Bartenders: ",
                    course_list:[
                        {item : "$25/hr - 4hr minimum"},
                    ]
                },

                {
                    name: "Photographer: ",
                    course_list:[
                        {item : " - contact domino for more details - "},
                    ]
                },

                {
                    name: "DJ: ",
                    course_list:[
                        {item : " - contact domino for more details - "},
                    ]
                },

                {
                    name: "TRASH & RECYCLING REMOVAL SERVICE ",
                    course_list:[
                        {item : " - INQUIRED WITHIN - "},
                    ]
                },

                {
                    name: "SET_UP & CLEAN UP ",
                    course_list:[
                        {item : " - INQUIRED WITHIN - "},
                    ]
                },

                {
                    name: ".",
                    course_list:[
                        {item : "*prices do not include event staffing, travel fee, 20% service charge & current tax rate*"},
                        {item : "."},
                        {item : "FOR ANY GENERAL QUESTIONS, PLEASE CONTACT"},
                        {item : "DOMINO CORCEGA"},
                        {item : "Private Chef/Owner"},
                    ]
                },

            ]
        }),
    }),




    testArr: [1,2,3,4]
});



