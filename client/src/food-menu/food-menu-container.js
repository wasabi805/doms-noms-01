import { connect } from 'react-redux';
import * as Selectors from '../logic/selectors';
import { getFoodMenuTitle, getFoodMenuContent, getFoodMenuFooter, getLogo } from '../logic/selectors';


import Presenter      from './food-menu-presenter';

const mapStateToProps = (state) => ({
  food_menu_title: getFoodMenuTitle(state),
  food_menu_content: getFoodMenuContent(state),
  food_menu_footer: getFoodMenuFooter(state),
  logo: getLogo(state),
});


const Container = connect(mapStateToProps)(Presenter);


export default Container;
