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
        {i: 'a', x: 0, y: 0, w: 6, h: 2},
        {i: 'b', x: 6, y: 0, w: 6, h: 2},
        {i: 'c', x: 0, y: 6, w: 12, h: 2}
      ];
    var layouts = {
        lg: layout,
    }
    return (
      <ResponsiveGridLayout className="dashboard-2" layouts={layouts}
        breakpoints={{lg: 1400, md: 996, sm: 768, xs: 480, xxs: 0}}
        cols={{lg: 12, md: 10, sm: 6, xs: 4, xxs: 2}}>
        <div key="a"><TextWidget title="Widget 1" data="Testing"></TextWidget></div>
        <div key="b"><TextWidget title="Widget 2" data="Testing"></TextWidget></div>
        <div key="c"><TextWidget title="Widget 3" data="Testing"></TextWidget></div>
      </ResponsiveGridLayout>
    )
  }
}