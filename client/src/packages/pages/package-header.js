import React from 'react';

const PackageHeader = (props)=>{
    console.log(props.header, 'can you see the props?');
    return(
        <React.Fragment>
            <h4 className='menu-type'>{props.header.title}</h4>
            <smal>{props.header.text}</smal>
        </React.Fragment>
    )
};

export default PackageHeader


