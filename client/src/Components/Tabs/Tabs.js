import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import * as Dashboards from '../../dashboards';
import './tabs.css';

export default class Tabs extends Component{
    render(){
        return(
            <div className="nav__tabs">
                {this.props.data.map((d, i) => {
                    return(
                        <NavLink key={i} activeClassName="tab-active" to={`/${Dashboards[d].__name}`}>{Dashboards[d].__name}</NavLink>
                    )
                })}
            </div>
        )
    }
}