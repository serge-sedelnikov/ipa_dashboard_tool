import React from 'react';
import Widget from '../base-widget';
import { Card, CardTitle, CardSubtitle } from 'reactstrap';
import {
    Radar, RadarChart, PolarGrid,
    PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer
} from 'recharts';


import './radar-chart.css';

export default class RadarChartWidget extends Widget {
    render() {
        let { header, fill, stroke } = this.props;
        let { response } = this.state;
        console.log(response);

        // convert response from key-value pairs to the radar chart data
        let data = Object.keys(response).map(key => {
            return {
                name: key,
                value: response[key]
            }
        });

        if(data.length === 0){
            return (
                <Card body className="text-center h-100 line-chart-widget widget" style={{ minHeight: 350 }}>
                    <CardTitle>{header}</CardTitle>
                    <CardSubtitle>waiting for data...</CardSubtitle>
                </Card>
            )
        }

        return (
            <Card body className="text-center h-100 line-chart-widget widget" style={{ minHeight: 350 }}>
                <CardTitle>{header}</CardTitle>
                <ResponsiveContainer width="100%" height={350} style={{ padding: 0 }}>
                    <RadarChart data={data}>
                        <PolarGrid />
                        <PolarAngleAxis dataKey="name" />
                        <PolarRadiusAxis />
                        <Radar name="Scans Count" dataKey="value" stroke={ stroke || "#8884d8" } fill={ fill || "#8884d8"} fillOpacity={0.7} />
                    </RadarChart>
                </ResponsiveContainer>
            </Card>
        )
    }
}