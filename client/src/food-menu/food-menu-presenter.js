import React from 'react';
// import PropTypes from 'prop-types';


import MenuColumn from './menu-column';
import Footer from './footer';

const Presenter = ({food_menu_content, food_menu_footer, logo}) => {


  //Splits and unpacks the menu items to left and right sides
  let menu_left_side = (items) => {
    return items.splice(0,2);
  };
  let menu_right_side = (items) => {
    return items.splice(0,2);
  };

  return (
    <section className="food-menu">
      <div className="food-menu-container">

        <div className='header'>
          <h2 className="title">MENU</h2>
          <b><p>Come eat our food | Let us know what you're craving!</p></b>
          <p> * All prices include taxes * </p>
        </div>

        <div className='food-menu-body'>
          <div className="column column-left">
            {/*Spilt the array before sending to the left side*/}
            <MenuColumn food_menu_content={menu_left_side(food_menu_content)}/>
          </div>

          <div className="column column-right">
            {/*Spilt the array before sending to the left side*/}
            <MenuColumn food_menu_content={menu_right_side(food_menu_content)}/>
          </div>
        </div>

        <Footer logo={logo} food_menu_footer={food_menu_footer}/>

      </div>
    </section>
);
};

Presenter.displayName = 'Food Menu Presenter';

// Presenter.propTypes = {
//   food_menu_content: PropTypes.arrayOf(
//
//     PropTypes.shape({
//       title: PropTypes.string.isRequired,
//
//       courses: PropTypes.string.isRequired,
//     })
// ),
// };

Presenter.defaultProps = {
  food_menu_content: [],
  food_menu_footer: {},
  logo: '',
};

export default Presenter;