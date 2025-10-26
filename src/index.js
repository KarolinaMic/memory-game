import React from 'react';
import ReactDOM from 'react-dom/client';  // Importuj z 'react-dom/client'
import './index.css';
import App from './App';

// Tworzymy root przy użyciu createRoot
const root = ReactDOM.createRoot(document.getElementById('root'));

// Renderujemy aplikację
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
