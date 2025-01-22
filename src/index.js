import React from 'react';
import ReactDOM from 'react-dom';
import './App.css'; // Certifique-se de que App.css esteja na raiz de src
import App from './App'; // Certifique-se de que App.js está na raiz de src



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root') // Certifique-se de que #root existe no index.html
);
