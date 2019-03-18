import { connect } from 'react-redux';

import { getAboutUsImage } from '../logic/selectors';
import Presenter      from './about-us-presenter';

const mapStateToProps = (state) => ({
  about_us: getAboutUsImage(state),
});


const Container = connect(mapStateToProps)(Presenter);


export default Container;