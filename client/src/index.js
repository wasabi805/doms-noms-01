import React from 'react';
import ReactDOM from 'react-dom';
import './00-assets/styles/index.css';

const {default: AppComponent} = require('./main');
const App = React.createFactory(AppComponent);


// import App from './main';


ReactDOM.render(<App/>, document.getElementById('root'));



