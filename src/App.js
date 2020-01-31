import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import { ThemeProvider } from '@material-ui/core/styles';
import theme from './config/theme.config';

import SignIn from './pages/SignIn';

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/">
            <SignIn />
          </Route>
          <Route path="/sign-up">
            Signup
          </Route>
        </Switch>
      </ThemeProvider>
    </Router>
  );
}

export default App;
