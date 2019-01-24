import React from 'react';

import HeaderContainer      from '../header/header-container'

import HeroContainer        from '../hero/hero-container';

const Presenter = (props) => {
    // console.log(props, 'here we go');
    return (
        <div className="page">
            <HeaderContainer/>
            <HeroContainer/>
        </div>
    );
};


export default Presenter;