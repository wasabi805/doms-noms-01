import { connect } from 'react-redux';

import Presenter from './nav-link-presenter';
import * as Selectors from '../../logic/selectors';


const mapStateToProps = state => ({

});



const Container = connect(mapStateToProps)(Presenter);


export default Container;