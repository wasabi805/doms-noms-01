import React from 'react';
// import PropTypes from 'prop-types';

import { configureAnchors } from 'react-scrollable-anchor'

const Presenter = () => {
    configureAnchors({offset: -40, scrollDuration: 150})
    return (

        <React.Fragment>

            <div className="nav-links-container">
                <ul>
                    <li >
                        <a href='#home'>Home</a>
                    </li>

                    <li >
                        <a href='#services'>Services</a>
                    </li>

                    <li >
                        <a href='#food-menu'>Menu</a>
                    </li>

                    <li>
                        <a href='#packages'>Catering</a>
                    </li>

                    <li >
                        <a href='#gallery'>Gallery</a>
                    </li>

                    <li >
                        <a href='#contact'>Contact</a>
                    </li>
                </ul>
            </div>


            {/*<div className="container pullUp">*/}
                {/*<a href='#home'>*/}
                    {/*<a>Home</a>*/}
                {/*</a>*/}

                {/*<a href='#services'>*/}
                    {/*<a>Services</a>*/}
                {/*</a>*/}

                {/*<a href='#food-menu'>*/}
                    {/*<a>Menu</a>*/}
                {/*</a>*/}

                {/*<a href='#packages'>*/}
                    {/*<a>Packages</a>*/}
                {/*</a>*/}

                {/*<a href='#gallery'>*/}
                    {/*<a>Gallery</a>*/}
                {/*</a>*/}

                {/*<a href='#contact'>*/}
                    {/*<a>Contact</a>*/}
                {/*</a>*/}
            {/*</div>*/}

        </React.Fragment>
    );
};


export default Presenter;