import React, { Component } from 'react';
import './text-widget.css';

export default class TextWidget extends Component{
    render(){
        return(
            <div className="text-widget">
            <h1>{this.props.title}</h1>
            <p>{this.props.data}</p>
            </div>
        )
    }
}