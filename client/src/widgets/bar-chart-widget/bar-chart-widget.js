import React from 'react';
import { Card, CardTitle } from 'reactstrap';
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar, ResponsiveContainer } from 'recharts';

import Widget from '../base-widget';
import './bar-chart-widget.css';

export default class BarChartWidget extends Widget {
    render() {
        let { header, value, fill, stroke } = this.props;
        let { response } = this.state;

        // data = [
        //     { name: 'a', value: 12 }
        // ];
        // console.log(response);

        return (
            <Card body className="text-center h-100 line-chart-widget widget" style={{ minHeight: 350 }}>
                <CardTitle>{header}</CardTitle>
                <ResponsiveContainer width="100%" height={350} style={{padding: 0}}>
                    <BarChart data={response ? response.records : []}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        {/* <CartesianGrid strokeDasharray="3 3" /> */}
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar type="monotone" dataKey={value} strokeWidth={3} stroke={ stroke || "rgb(255,209,0)" } fill={ fill || "rgb(255,243,191)" } />
                    </BarChart>
                </ResponsiveContainer>
            </Card>
        )
    }
}