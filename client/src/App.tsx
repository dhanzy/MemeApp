import React from 'react';
import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import './App.css';

import Routes from './components/Routes'
import ToggleModeProvider from './context/modeContext';
         

function App() {
  return (
    <ToggleModeProvider>
      <BrowserRouter>
      <CssBaseline />
        <Routes />
      </BrowserRouter>
    </ToggleModeProvider>
  );
}

export default App;
