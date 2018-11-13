import React from 'react';
import { Card, CardText, CardTitle, CardSubtitle } from 'reactstrap';
import { Divider } from '@storaensods/se-design-system';
import Widget from '../base-widget';
import './text-widget.css';

export default class TextWidget extends Widget {
    render() {
        const { logo, header, text, footer } = this.props;

        return (
            <Card body className="text-center h-100">
                {logo ? (<div className="text-w-logo-container">
                    <img src={logo} className="text-w-logo" />
                </div>) : null}

                <div>
                    {header ? <CardTitle>{header}</CardTitle> : null}
                    {header ? <Divider /> : null}
                    <CardText>{this.state.response || text}</CardText>
                    <CardSubtitle>{footer}</CardSubtitle>
                </div>


            </Card>
        )
    }
}