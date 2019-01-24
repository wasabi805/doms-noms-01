import { connect } from 'react-redux';

import { getService } from '../logic/selectors';
import Presenter      from './services-presenter';

const mapStateToProps = (state) => ({
  services: getService(state),
});


const Container = connect(mapStateToProps)(Presenter);


export default Container;
