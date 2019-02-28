import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.css';
import Dashboard from './Dashboard';
import Navbar from './Navbar';
import SignIn from './SignIn';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route path="/signin" component={SignIn} />
            </Switch>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
