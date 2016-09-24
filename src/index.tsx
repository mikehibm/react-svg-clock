import * as moment from 'moment';

import './index.html';
import './main.css';

console.log('こんばんは！');

const now = moment().format('YYYY-MM-DD HH:mm:ss');
console.log(`Now is ${now}.`);


