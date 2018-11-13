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
    // on widget mount, ask for latest cached data ID based on data ID
    this.socket.emit('/get_cache', dataId);
  }

  componentWillUnmount(){
    this.socket.disconnect();
  }

  /**
   * Sends the new parameter value back to backend for all jobs to fetch it and use in next data return loop.
   * @param {*} paramName Name of the parameter. Should follow variable naming rules.
   * @param {*} newValue New value of the perameter.
   */
  updateParameterValue(paramName, newValue){
    this.socket.emit('/parameterChanged', { paramName, newValue } );
  }

  render(){
      return(
          <div>This is the data {this.state.response}</div>
      )
  }
}

export default Widget;