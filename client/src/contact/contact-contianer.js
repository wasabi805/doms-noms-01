import { connect } from 'react-redux';

import Presenter from './contact-presenter';
import * as Selectors from '../logic/selectors';


const mapStateToProps = state => ({
  error: Selectors.getFormError(state),
  phone: Selectors.getPhoneNumber(state),
  brand: Selectors.getBrands(state),
});



const Container = connect(mapStateToProps)(Presenter);


export default Container;
