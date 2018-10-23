require('react-app-polyfill/ie11')
const React = require('react');
const ReactDOM = require('react-dom');
require('./stylesheets/index.scss');
const App = require('./views/App');

ReactDOM.render(<App />, document.getElementById('root'));
