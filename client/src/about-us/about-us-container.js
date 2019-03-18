import { connect } from 'react-redux';

import { getAboutUsImage } from '../logic/selectors';
import Presenter      from './about-us-presenter';
import * as Selectors from '../logic/selectors';

const mapStateToProps = (state) => ({
  about_us: getAboutUsImage(state),
  brand: Selectors.getBrands(state),
});


const Container = connect(mapStateToProps)(Presenter);


export default Container;