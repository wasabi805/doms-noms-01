import { connect } from 'react-redux';
import Presenter      from './page-presenter';
import * as Selectors from '../logic/selectors';

const mapStateToProps = state => ({
    initial_content: Selectors.load_initial_content(),
});

const Container = connect(mapStateToProps)(Presenter);


export default Container;