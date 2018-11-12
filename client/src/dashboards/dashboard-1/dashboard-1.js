import React from 'react';
import { Row, Col } from 'reactstrap';

import Dashboard from '../base-dashboard';
import { NumberWidget, TextWidget, ListWidget } from '../../widgets';
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
            <TextWidget dataId="schedule-matched" header="Ticks" footer="Last time refreshed" />
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
      </div>
    )
  }
}