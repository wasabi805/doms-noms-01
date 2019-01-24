import React from 'react';

import HeaderContainer      from '../header/header-container'

import HeroContainer        from '../hero/hero-container';
import StoryContainer       from '../story/story-container'

const Presenter = (props) => {
    // console.log(props, 'here we go');
    return (
        <div className="page">
            <HeaderContainer/>
            <HeroContainer/>
            <StoryContainer/>
        </div>
    );
};


export default Presenter;