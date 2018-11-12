import React, { Component } from "react";
import socketIOClient from "socket.io-client";

class Widget extends Component {
  constructor() {
    super();
    this.endpoint = process.env.REACT_APP_SOCKETIO_URI || 'http://localhost:5000';
    this.socket = null;
    this.state = {
      response: false,
    };
  }

  setDataToState(data){
    this.setState({ response: data });
  }

  componentDidMount() {
    console.log(this.props);
    // extract data ID from the props
    let { dataId } = this.props;
    this.socket = socketIOClient(this.endpoint);
    // subscribe for it
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