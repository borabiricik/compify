import React from 'react';
import ReactDOM from 'react-dom/client';
import { CompifyProvider, Navbar } from './Components';
import Home from './Pages/Home';
import "./Styles/main.scss"
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <CompifyProvider theme='light'>
      <Home />
    </CompifyProvider>
  </React.StrictMode>
);
