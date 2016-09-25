import * as moment from 'moment';
import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.html';
import './main.css';
import { App } from './App';

console.log('index.tsx loaded.');

const now = moment().format('YYYY-MM-DD HH:mm:ss');
console.log(`Now is ${now}.`);

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
