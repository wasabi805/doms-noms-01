import React from 'react';

import HeaderContainer      from '../header/header-container';
import HeroContainer        from '../hero/hero-container';
import StoryContainer       from '../story/story-container';
import ServicesContainer       from '../services/services-container';
import FoodMenu                 from '../food-menu/food-menu-container';
import GalleryContainer         from '../gallery/gallery-container';
import AboutUsContainer     from '../about-us/about-us-container';
import ContactContainer     from '../contact/contact-contianer';
import PackagesContainer from '../packages/packages-container';


const Presenter = (props) => {
    // console.log(props, 'here we go');
    return (
        <div className="page">
            <HeaderContainer/>
            <HeroContainer/>
            <StoryContainer/>
            <ServicesContainer/>
            <FoodMenu/>
            <PackagesContainer/>
            <GalleryContainer/>
            <AboutUsContainer/>
            <ContactContainer/>
        </div>
    );
};


export default Presenter;