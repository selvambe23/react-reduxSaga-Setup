import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
  } from "react-router-dom";
import Home from './containers/Pages/Home/Home';

export default function router() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Redirect from='/home' to='/' />
          </Switch>
        </div>
      </Router>
    );
  }