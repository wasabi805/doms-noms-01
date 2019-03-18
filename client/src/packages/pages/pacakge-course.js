import React from 'react';

const PackageCourse = (props)=>{
    let {course} = props.list;
    return(
        <React.Fragment>
            {course.map((c , index)=>{
                return <React.Fragment>
                    <b><small key={index} className='underline'>{c.name}</small></b>


                    <ul className='food-list'>
                   {Object.keys(c.course_list).map(z=>{
                       return<li className='food-item'>{c.course_list[z].item}</li>
                   })}
                    </ul>
                </React.Fragment>
            })}
        </React.Fragment>
    )
};

export default PackageCourse;