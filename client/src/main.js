import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store';

import PagePresenter from './page/page-container';

import './00-assets/styles/main.scss';

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <PagePresenter/>
            </Provider>
        );
    }
}

export default App;
