import React from 'react';
import logo from '../00-assets/img/logo.min.png'

import SocialContainer from './social/social-container';
// import NavContainer from '../nav/nav-container';

const Presenter = () => {
    return (
        <header className="page-header">
            <div className="logo-area">
                {/*<button className="menu-button" onClick={func.handleMenuClick}>*/}
                    {/*<i className="fas fa-bars" />*/}
                {/*</button>*/}

                {/*DOMS NOMS LOGO WuTang*/}
                <img src={logo} />

                <SocialContainer />
            </div>
            {/*<NavContainer />*/}
        </header>
    );
};


export default Presenter;