import React from 'react';
// import PropTypes from 'prop-types';


const Presenter = () => {


    return (
        <section className="hero">
            <div className='hero-content'>
                <div className='iframe-container'>
                    <div className='hero-overlay'/>
                    <iframe  src="https://streamable.com/s/lp7w1/opekoi?autoplay=1&muted=1" frameBorder="0" />
                </div>

                <div className='hero-overlay-content'>
                    <div className='overlay-text-container'>
                        <h1 className='puff-in-center'>Welcome</h1>
                        <p className='tracking-in-expand'>|  DOM'S NOMS |</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

// Presenter.displayName = 'Hero Presenter';
//
//
// Presenter.propTypes = {
//     images: PropTypes.array.isRequired,
// };
//
// Presenter.defaultProps = {
//     images: [],
// };


export default Presenter;