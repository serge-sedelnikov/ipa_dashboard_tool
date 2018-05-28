import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';
import Widget from '../base-widget';
import './list-widget.css';

export default class ListWidget extends Widget{    
    render(){
        if(this.state.response){
            return(
                <ListGroup>
                {this.state.response.map((o, i) => {
                    return(
                        <ListGroupItem key={i}>{o}</ListGroupItem>
                    )
                })}
                </ListGroup>
            )
        }else{
            return(
                null
            )
        }
    }
}