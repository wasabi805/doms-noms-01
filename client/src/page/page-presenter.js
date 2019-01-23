import React from 'react';


const Presenter = (props) => {
    console.log(props, 'here we go');
    return (
        <div className="page">
            <img src="https://i.ibb.co/9rD0DhM/starscream.png" alt="logo" />
            <p>{props.initial_content.payload}</p>
        </div>
    );
};


export default Presenter;