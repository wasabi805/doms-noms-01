import React from 'react';

const Presenter = ({name, link}) => {
    return (
        <a href={link} target="_blank" rel="noopener noreferral">
            <i className={`fab fa-${name}`}></i>
        </a>
    );
};

export default Presenter;