import React from 'react';

const PackageHeader = (props)=>{

    return(
        <React.Fragment>
            <h4 className='menu-type'>{props.header.title}</h4>
            <small>{props.header.text}</small>
        </React.Fragment>
    )
};

export default PackageHeader


