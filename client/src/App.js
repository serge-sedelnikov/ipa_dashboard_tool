import React, { Component } from 'react';
import * as Dashboards from './Dashboards'
import './App.css';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

class App extends Component {
  render() {
    return (
      <Dashboards.Dashboard_1></Dashboards.Dashboard_1>
    );
  }
}

export default App;
