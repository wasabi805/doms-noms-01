import React from 'react';

const Presenter = ({name, link}) => {
    console.log(name, link, 'are the names and links in here?');
    return (
        <a href={link} target="_blank" rel="noopener noreferral">
            <i className={`fab fa-${name}`}></i>
        </a>
    );
};

export default Presenter;