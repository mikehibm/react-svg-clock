import * as React from 'react';
import * as ReactDOM from 'react-dom';

import './index.html';
import './main.css';
import { App } from './App';

console.log('index.tsx loaded.');

ReactDOM.render(
    <App />,
    document.getElementById('app')
);
