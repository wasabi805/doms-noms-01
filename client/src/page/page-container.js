import React from 'react';
import { connect } from 'react-redux';
import Presenter      from './page-presenter';
import * as Selectors from '../logic/selectors';
import * as Actions from '../logic/actions'


const mapStateToProps = state => ({
    openNavModal: Actions
});

const Container = connect(mapStateToProps)(Presenter);
export default Container;

