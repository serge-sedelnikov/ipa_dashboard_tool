import React, { Component } from 'react';
import GridLayout from 'react-grid-layout';
import {TextWidget} from '../../Widgets';
import './Dashboard_1.css';

export default class Dashboard_1 extends Component{
    render() {
        var layout = [
          {i: 'a', x: 0, y: 0, w: 6, h: 6},
          {i: 'b', x: 6, y: 0, w: 6, h: 6},
          {i: 'c', x: 0, y: 6, w: 12, h: 6}
        ];
        return (
          <GridLayout className="dashboard_1" layout={layout} cols={12} rowHeight={30} width={1200}>
            <div key="a">
                <TextWidget title="Widget 1" data="Testing"></TextWidget>
            </div>
            <div key="b">
                <TextWidget title="Widget 2" data="Testing"></TextWidget>
            </div>
            <div key="c">
                <TextWidget title="Widget 3" data="Testing"></TextWidget>
            </div>
          </GridLayout>
        )
      }
}