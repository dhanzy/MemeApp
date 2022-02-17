import React from 'react';
import { Box } from '@mui/system';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
// import Login from './pages/Login';
import LoginRegister from './pages/LoginRegister';
import Signup from './pages/Signup';
import ToggleModeProvider from './context/modeContext';
         

function App() {
  return (
    <ToggleModeProvider>
      <BrowserRouter>
      <CssBaseline />
          <Switch>
          <Box>
            <Route exact path="/login" component={LoginRegister} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/" >
              <Navbar />
              <Home />
            </Route>
          </Box>
        </Switch>
      </BrowserRouter>
    </ToggleModeProvider>
  );
}

export default App;
