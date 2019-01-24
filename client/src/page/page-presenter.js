import React from 'react';

import HeaderContainer      from '../header/header-container';

import HeroContainer        from '../hero/hero-container';
import StoryContainer       from '../story/story-container';
import ServicesContainer       from '../services/services-container';
import FoodMenu                 from '../food-menu/food-menu-container'

const Presenter = (props) => {
    // console.log(props, 'here we go');
    return (
        <div className="page">
            <HeaderContainer/>
            <HeroContainer/>
            <StoryContainer/>
            <ServicesContainer/>
            <FoodMenu/>
        </div>
    );
};


export default Presenter;