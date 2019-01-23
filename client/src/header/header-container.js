import { connect } from 'react-redux';

import Presenter      from './header-presenter';
import * as Selectors from '../logic/selectors';


const mapStateToProps = state => ({
    logo: Selectors.getLogo(state),
    social: Selectors.getBrands(state)
});

const Container = connect(mapStateToProps)(Presenter);


export default Container;