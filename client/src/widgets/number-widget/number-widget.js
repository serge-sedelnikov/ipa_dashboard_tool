import React from 'react';
import { Card, CardText, CardTitle } from 'reactstrap';
import { Divider } from '@storaensods/se-design-system';
import Widget from '../base-widget';
import './number-widget.css';

export default class NumberWidget extends Widget{
    render(){
        let { value } = this.props;
        let { response } = this.state;
        return(
            <Card body className="text-center h-100">
                <div>
                    <h4>{this.props.header}</h4>
                </div>
                <Divider />
                <div>
                    <h2>{this.props.prefix} { value ? response[value] : response } {this.props.suffix}</h2>
                </div>
                <small>{this.props.footer}</small>
            </Card>
        )
    }
}