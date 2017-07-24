import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import WholeApp from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <WholeApp />,
  document.getElementById('root')
);
registerServiceWorker();
