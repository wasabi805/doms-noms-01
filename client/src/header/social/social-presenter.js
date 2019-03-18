import React from 'react';
// import PropTypes from 'prop-types';

import LinkPresenters from './link-presenter';

const Presenter = ({brand}) => {

    return (
        <div className="social">
            { brand.map((brands, i) => <LinkPresenters key={i} {...brands} />) }
        </div>
    );
};

export default Presenter;