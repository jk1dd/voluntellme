import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import WholeApp from './App';
import {organizations} from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <WholeApp orgs={organizations} />,
  document.getElementById('root')
);
registerServiceWorker();
