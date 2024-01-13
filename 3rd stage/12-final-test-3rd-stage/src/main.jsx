import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import { GlobalStyles } from './assets/styles/index.js';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <GlobalStyles />
  </React.StrictMode>,
);