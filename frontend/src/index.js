import React from 'react';
import './index.css';
import App from './App';
import GeneralProvider from './Context/GeneralProvider';
import { createRoot } from 'react-dom/client';

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <GeneralProvider>
    <App />
  </GeneralProvider>
</React.StrictMode>,);
