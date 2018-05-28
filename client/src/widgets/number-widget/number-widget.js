import React from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';
import Widget from '../base-widget';
import './number-widget.css';

export default class NumberWidget extends Widget{
    render(){
        let { value } = this.props;
        let { response } = this.state;
        return(
            <Card body className="text-center h-100">
                <CardText>{this.props.header}</CardText>
                <CardTitle>{this.props.prefix} { value ? response[value] : response } {this.props.suffix}</CardTitle>
                <CardText>{this.props.footer}</CardText>
            </Card>
        )
    }
}