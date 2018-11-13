import React from 'react';
import { Row, Col, Card } from 'reactstrap';
import { Input, Button } from '@storaensods/se-design-system';

import Dashboard from '../base-dashboard';
import { NumberWidget, TextWidget, ListWidget } from '../../widgets';
import Widget from '../../widgets/base-widget';
import './dashboard-1.css';

/**
 * Parameters edit form.
 */
export class NameParamForm extends Widget {
  
  constructor(){
    super();
    this.state = {
      ...this.state,
      newName: ''
    }
  }

  /**
   * Passes the argument to the backend.
   */
  handleNameSubmit(){
    this.updateParameterValue('userName', this.state.newName);
  }

  /**
   * On user enters value.
   * @param {*} event Change event
   */
  handleNameChange(event){
    console.log(event.target.value);
    this.setState({
      ...this.state,
      newName: event.target.value
    })
  }

  /**
   * Renders.
   */
  render() {
    return (<Card body>
      <form>
        <div className="form-group">
          <label htmlFor="nameInput">Enter your name here</label>
          <Input id="nameInput" placeholder="your name here..." value={this.state.newName} onChange={this.handleNameChange.bind(this)}/>
          <small id="emailHelp" className="form-text text-muted">We'll never share your name with anyone else.</small>
        </div>
        <Button icon="done" size="sm" onClick={this.handleNameSubmit.bind(this)}>Submit</Button>
      </form>
    </Card>)
  }
}


export default class Dashboard1 extends Dashboard {

  /** The dashboard name to display */
  static getName() {
    return 'Classic Dashboard';
  }

  /** Render widgets */
  render() {
    return (
      <div className="container-fluid mt-2">
        <Row className="mb-3">
          <Col>
            <TextWidget
              text="Classic dashboard that shows all features." logo="https://res.cloudinary.com/stora-enso-oyj/image/upload/v1526327990/stora-enso_batsdj.png" />
          </Col>
        </Row>


        <Row>
          {/* Generic numbers */}
          <Col lg="2" md="4" xs="12">
            <NumberWidget dataId="random-number" value="avg" header="Average weight" footer="of the person" />
          </Col>
          <Col lg="2" md="4" xs="12">
            <NumberWidget dataId="random-number" value="count" header="Total count" footer="of visitors" suffix="%" />
          </Col>
          <Col lg="4" md="4" xs="12">
            <Row className="h-100">
              <Col lg="12">
                <TextWidget dataId="schedule-matched" header="Ticks" footer="Last time refreshed" />
              </Col>
              <Col lg="12" className="mt-1">
                <TextWidget dataId="parameterized-data" header="I am reacting on parameter" footer="Edit it below, job will accept it and will refresh the value" />
              </Col>
            </Row>
          </Col>
          <Col lg="2" md="4" xs="12">
            <NumberWidget dataId="topic1" header="MQTT Number 1"></NumberWidget>
          </Col>
          {/* /Generic numbers */}

          {/* List */}
          <Col lg="2" md="4" xs="12">
            <ListWidget dataId="list-of-items" header="MQTT Number 1" />
          </Col>
          {/* / List */}
        </Row>

        {/* Edit parameter */}
        <Row className="mt-3">
          <Col lg="5" md="6" xs="12">
            <NameParamForm />
          </Col>
        </Row>
        {/* / Edit parameter */}
      </div>
    )
  }
}