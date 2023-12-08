// index.js
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

// Importa createRoot desde react-dom/client
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
