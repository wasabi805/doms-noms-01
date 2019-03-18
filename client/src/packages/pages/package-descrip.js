import React from 'react';

const PackageDescrip = (props)=>{
    let {packages} = props.list;
    console.log(packages, 'packages');

    return(
        <React.Fragment>
            <b><p className='underline'>Packages</p></b>
            {packages.map(pkg=>{
                return(
                    <React.Fragment>
                        <h4 className='combo-name'>{pkg.title}</h4>
                        <p>{pkg.text}</p>
                    </React.Fragment>
                )
            })}
        </React.Fragment>
    )
};

export default PackageDescrip