import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Routes from './routes/index';
import { BrowserRouter as Router } from 'react-router-dom'
import globalStyles from './assets/styles/global.css';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes />
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
