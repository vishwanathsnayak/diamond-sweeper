import 'babel-polyfill';
import 'normalize.css';

import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';

ReactDOM.render(<App message='Hello World!' />, document.getElementById('app'));
