const cpx = require('cpx');
const path = require('path');

const src = './src/';
const dist = './dist/';
const distlib = path.join(dist, 'lib/');

//cpx.copy(path.join(src, "index.html"), dist);
//cpx.copy(path.join(src, "main.css"), dist);
cpx.copy('node_modules/es6-shim/es6-shim.min.js', distlib);
cpx.copy('node_modules/moment/min/moment.min.js', distlib);
cpx.copy('node_modules/pubsub-js/src/pubsub.js', distlib);
cpx.copy('node_modules/react/dist/react.js', distlib);
cpx.copy('node_modules/react-dom/dist/react-dom.js', distlib);