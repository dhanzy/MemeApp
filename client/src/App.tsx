import React from 'react';
import { Box } from '@mui/system';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import './App.css';

import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import ToggleModeProvider from './context/modeContext';
         

function App() {
  return (
    <ToggleModeProvider>
      <BrowserRouter>
      <CssBaseline />
          <Switch>
          <Box>
            <Route exact path="/login" component={Login} />
            <Route exact path="/signup" component={Signup} />
            <Navbar />
            <Route exact path="/" >
              <Home />
            </Route>
          </Box>
        </Switch>
      </BrowserRouter>
    </ToggleModeProvider>
  );
}

export default App;
