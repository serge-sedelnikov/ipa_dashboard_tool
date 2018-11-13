import React, { Component } from 'react';
import { NavLink as Link } from 'react-router-dom';
import * as Dashboards from '../../dashboards';
import { Nav, NavItem, NavLink } from 'reactstrap';
import './tabs.css';

/**
 * Tabs that are indicating available dashboards.
 */
export default class Tabs extends Component {
    render() {
        return (
            <Nav tabs>
                {this.props.data.map((d, i) => {
                    return (
                        <NavItem key={i} >
                            <Link className="nav-link" to={`/${Dashboards[d].__name}`}>{Dashboards[d].__name}</Link>
                        </NavItem>
                    )
                })}
            </Nav>
        )
    }
}