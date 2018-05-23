import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'
import './Tabs.css'

export default class Tabs extends Component{
    render(){
        return(
            <div className="nav__tabs">
                <NavLink activeClassName="tab-active" to="/dashboard_1">dashboard_1</NavLink>
                <NavLink activeClassName="tab-active" to="/dashboard_2">dashboard_2</NavLink>
            </div>
        )
    }
}