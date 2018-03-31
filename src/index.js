import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/App';
import {Background} from './components/Background.js'
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Background />, document.getElementById('root'));
registerServiceWorker();
