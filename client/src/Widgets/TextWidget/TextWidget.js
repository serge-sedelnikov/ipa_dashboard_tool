import React, { Component } from 'react';
import './TextWidget.css';

export default class TextWidget extends Component{
    render(){
        return(
            <div className="TextWidget">
            <h1>{this.props.title}</h1>
            <p>{this.props.data}</p>
            </div>
        )
    }
}