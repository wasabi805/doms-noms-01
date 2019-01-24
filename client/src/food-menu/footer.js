import React from 'react';


const Footer = (props) => {

  return(

    <div className="footer">
      <p className='text'>{props.food_menu_footer.text}</p>


      <img className="logo" src={props.logo} alt=""/>
    </div>

  );
};


export default Footer;