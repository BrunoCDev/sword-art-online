import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';

import Router from './Router'

ReactDOM.render(
    <Router />
, document.getElementById('root'));
registerServiceWorker();
