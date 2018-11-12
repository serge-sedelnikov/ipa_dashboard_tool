import React from 'react';
import { Row, Col } from 'reactstrap';

import Dashboard from '../base-dashboard';
import { NumberWidget } from '../../widgets';
import './dashboard-1.css';

export default class Dashboard1 extends Dashboard {

  /** The dashboard name to display */
  static getName() {
    return 'Classic Dashboard';
  }

  /** Render widgets */
  render() {
    return (
      <div className="container-fluid mt-2">
        <Row>
          <Col lg="2" md="4" xs="12">
            <NumberWidget dataId="random-number" value="avg" header="Average weight" footer="of the person" />
          </Col>
          <Col lg="2" md="4" xs="12">
            <NumberWidget dataId="random-number" value="count" header="Total count" footer="of visitors" suffix="%" />
          </Col>
          <Col lg="2" md="4" xs="12">
            <NumberWidget dataId="schedule-matched" header="Ticks" />
          </Col>
          <Col lg="2" md="4" xs="12">
            <NumberWidget dataId="topic1" header="MQTT Number 1"></NumberWidget>
          </Col>
          <Col lg="2" md="4" xs="12">
            <NumberWidget dataId="topic2" header="MQTT Number 2"></NumberWidget>
          </Col>
        </Row>
      </div>
    )
  }
}