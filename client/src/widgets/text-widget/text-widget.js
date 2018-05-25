import React from 'react';
import { Card, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import Widget from '../base-widget';
import './text-widget.css';

export default class TextWidget extends Widget{
    render(){
        return(
            <Card body className="text-center h-100">
                <CardTitle>{this.props.header}</CardTitle>
                <CardText>{this.state.response}</CardText>
                <CardSubtitle>{this.props.footer}</CardSubtitle>
            </Card>
        )
    }
}