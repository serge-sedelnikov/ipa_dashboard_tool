import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import * as Dashboards from './Dashboards'
import Tabs from './Components/Tabs/Tabs';
import './App.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Tabs></Tabs>
          <Route exact path="/"  render={() => (<Redirect to="/dashboard_1"/>)} />
          <Route exact path="/dashboard_1" component={Dashboards.Dashboard_1} />
          <Route exact path="/dashboard_2" component={Dashboards.Dashboard_2} />
        </div>
      </Router>
    );
  }
}

export default App;
