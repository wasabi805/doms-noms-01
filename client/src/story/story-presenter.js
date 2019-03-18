import React from 'react';
// import PropTypes from 'prop-types';


const Presenter = ({title, text}) => {
    return (
        <section className="story">
            <div className="story-overlay">
                <h1 className="story-title">{title}</h1>
                { text.map((para, i) => <p key={i} className="story-text">{para}</p>) }
            </div>
        </section>
    );
};

// Presenter.displayName = 'Story Presenter';
//
// Presenter.propTypes = {
//     title: PropTypes.string.isRequired,
//     text: PropTypes.arrayOf(PropTypes.string.isRequired),
// };
//
// Presenter.defaultProps = {};


export default Presenter;