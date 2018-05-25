import React from 'react';
import { Card, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import Widget from '../base-widget';
import './number-widget.css';

export default class NumberWidget extends Widget{
    render(){
        return(
            <Card body className="text-center h-100">
                <CardText>{this.props.header}</CardText>
                <CardTitle>{this.props.prefix} {this.state.response} {this.props.suffix}</CardTitle>
                <CardText>{this.props.footer}</CardText>
            </Card>
        )
    }
}