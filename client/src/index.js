import React from 'react';
import ReactDOM from 'react-dom';

// base bootstrap css
import 'bootstrap/dist/css/bootstrap.min.css';
// custom styles css
import '@storaensods/se-design-system/dist/scss/index.scss';

import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
