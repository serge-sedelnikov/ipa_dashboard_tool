import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import * as Dashboards from './Dashboards'
import './App.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/"  render={() => (<Redirect to="/dashboard_1"/>)} />
          <Route exact path="/dashboard_1" component={Dashboards.Dashboard_1} />
        </div>
      </Router>
    );
  }
}

export default App;
