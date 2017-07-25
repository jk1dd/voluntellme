import React from 'react';
import ReactDOM from 'react-dom';
import Navigation from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Navigation />,
  document.getElementById('root')
);
registerServiceWorker();
