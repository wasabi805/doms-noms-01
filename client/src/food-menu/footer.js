import React from 'react';
import logo from '../../src/00-assets/img/logo.png'

const Footer = (props) => {

  return(

    <div className="footer">
      <p className='text'>{props.food_menu_footer.text}</p>


      <img className="logo" src={logo} alt=""/>
    </div>

  );
};


export default Footer;