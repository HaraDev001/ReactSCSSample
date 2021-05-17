import React from 'react';
import ReactDOM from 'react-dom';
import './containers/style.scss';
import Root from './containers';
import {unregister} from './serviceWorker';

ReactDOM.render(<Root />, document.getElementById('root'));
unregister();
