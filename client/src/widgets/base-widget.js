import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class Widget extends Component {
  constructor() {
    super();
    this.endpoint = 'http://localhost:5000';
    this.socket = null;
    this.state = {
      response: false,
    };
  }

  setDataToState(data){
    this.setState({ response: data });
  }

  componentDidMount() {
    let {dataId} = this.props;
    this.socket = socketIOClient(this.endpoint);
    this.socket.on(dataId, data => this.setDataToState(data));
  }

  componentWillUnmount(){
    this.socket.disconnect();
  }
  render(){
      return(
          <div>This is the data {this.state.response}</div>
      )
  }
}

export default Widget;