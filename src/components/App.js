import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import auth from '../hoc/auth';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import SignIn from './SignIn';
import SignUp from './SignUp';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={auth(Dashboard)} />
              <Route path="/signin" component={auth(SignIn, '/', true)} />
              <Route path="/signup" component={auth(SignUp, '/', true)} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
