import React from 'react';
import { ListGroup, ListGroupItem, Card } from 'reactstrap';
import Widget from '../base-widget';
import './list-widget.css';

export default class ListWidget extends Widget {
    render() {
        if (this.state.response) {
            return (
                <ListGroup>
                    {this.state.response.map((o, i) => {
                        return (
                            <ListGroupItem key={i}>
                                <div className="media">
                                    {o.icon ? <img className="mr-3" src=".../64x64" alt="Generic placeholder image" /> : null}
                                    <div className="media-body">
                                        {o.text || o}
                                    </div>
                                </div>
                            </ListGroupItem>
                        )
                    })}
                </ListGroup>
            )
        } else {
            return (
                <Card className="h-100"></Card>
            )
        }
    }
}