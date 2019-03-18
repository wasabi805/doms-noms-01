import React from 'react';
// import PropTypes from 'prop-types';

// import LinkPresenters from './link-presenter';

const Presenter = ({brand}) => {

    console.log(brand);

    return (

        <div className="social">
            {/*{ brand.map((brands, i) => <LinkPresenters key={i} {...brands} />) }*/}
            <ul>
                {brand.map((brands, i )=>{
                    return <li key={brands.name}>
                        <a href={brands.link} target="_blank" rel="noopener noreferrer">
                            <span className={`fab fa-${brands.name} fa-stack ${brands.name} jello-horizontal`} />
                            {/*fa-stack fa-lg icon-facebook*/}
                        </a>
                    </li>

                })}
            </ul>


        </div>
    );
};

export default Presenter;