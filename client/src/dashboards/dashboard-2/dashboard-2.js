import React from 'react';
import Dashboard from '../base-dashboard';
import { Responsive, WidthProvider } from 'react-grid-layout';
import {TextWidget} from '../../widgets';
import './dashboard-2.css';
const ResponsiveGridLayout = WidthProvider(Responsive);

export default class Dashboard2 extends Dashboard {
  static getName(){
    return 'Dashboard 2';
}
  render() {
    const layout = [
        {i: 'a', x: 0, y: 0, w: 6, h: 4},
        {i: 'b', x: 6, y: 0, w: 6, h: 4},
        {i: 'c', x: 0, y: 6, w: 12, h: 4}
      ];
    var layouts = {
        lg: layout,
    }
    return (
      <ResponsiveGridLayout rowHeight={30} className="dashboard-2" layouts={layouts}
        breakpoints={{lg: 1400, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 12, sm: 6, xs: 1, xxs: 1}}>
        <div key="a"><TextWidget dataId="schedule-matched" header="Text widget" footer="Footer content"></TextWidget></div>
        <div key="b"><TextWidget dataId="schedule-matched" header="Text widget" footer="Footer content"></TextWidget></div>
        <div key="c"><TextWidget dataId="schedule-matched" header="Text widget" footer="Footer content"></TextWidget></div>
      </ResponsiveGridLayout>
    )
  }
}