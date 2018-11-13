import React from 'react';
import { Card, CardTitle } from 'reactstrap';
import { AreaChart, XAxis, YAxis, Tooltip, Legend, Area, ResponsiveContainer } from 'recharts';

import Widget from '../base-widget';
import './line-chart-widget.css';

export default class LineChartWidget extends Widget {
    render() {
        let { header, value } = this.props;
        let { response } = this.state;

        // data = [
        //     { name: 'a', value: 12 }
        // ];
        console.log(response);

        return (
            <Card body className="text-center h-100 line-chart-widget widget" style={{ minHeight: 350 }}>
                <CardTitle>{header}</CardTitle>
                <ResponsiveContainer width="100%" style={{padding: 0}}>
                    <AreaChart data={response ? response.records : []}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Area type="monotone" dataKey={value} strokeWidth={3} stroke="rgb(255,209,0)" fill="rgb(255,243,191)" />
                    </AreaChart>
                </ResponsiveContainer>
            </Card>
        )
    }
}