import React from 'react';
// import PropTypes from 'prop-types';
import { HashLink as Link } from 'react-router-hash-link';
import { configureAnchors } from 'react-scrollable-anchor'

const Presenter = () => {
    configureAnchors({offset: -40, scrollDuration: 150})
    return (
        <div className="container pullUp">
            <a href='#home'>
                <a>Home</a>
            </a>

            <a href='#services'>
                <a>Services</a>
            </a>

            <a href='#food-menu'>
                <a>Menu</a>
            </a>

            <a href='#packages'>
                <a>Packages</a>
            </a>

            <a href='#gallery'>
                <a>Gallery</a>
            </a>

            <a href='#contact'>
                <a>Contact</a>
            </a>

        </div>
    );
};


export default Presenter;