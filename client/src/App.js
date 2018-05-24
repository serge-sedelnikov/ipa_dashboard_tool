import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import * as Dashboards from './dashboards';
import Tabs from './components/tabs/tabs';
import './App.css';

class App extends Component {
  render() {
    let dashboards = Object.keys(Dashboards);
      return (
        <Router>
          <div>
            <Tabs data={dashboards}></Tabs>
            <Route path="/" exact render={() => {
              return <Redirect to={Dashboards[dashboards[0]].__name} />
            }} />    
            {dashboards.map((d, i) => {
              let DashboardComponent = Dashboards[d];
              return (
                <Route key={i} exact path={`/${DashboardComponent.__name}`} component={DashboardComponent}/>
              )
            })}
          </div>
        </Router>
      );
    }
}

export default App;