import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import '@digi/arbetsformedlingen/dist/digi-arbetsformedlingen/digi-arbetsformedlingen.css';
import './app.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
