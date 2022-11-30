
import '../../../styles/Hero/MainInfo/Duration.css'
// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function Duration(props) {

    const averageSessions = props.averageSessions

    const chartData = [
        {
            name: 'L',
            duration: averageSessions[0].sessionLength
        },
        {
            name: 'M',
            duration: averageSessions[1].sessionLength
        },
        {
            name: 'M',
            duration: averageSessions[2].sessionLength
        },
        {
            name: 'J',
            duration: averageSessions[3].sessionLength
        },
        {
            name: 'V',
            duration: averageSessions[4].sessionLength
        },
        {
            name: 'S',
            duration: averageSessions[5].sessionLength
        },
        {
            name: 'D',
            duration: averageSessions[6].sessionLength
        },
    ];

    const CustomTooltip = ({ active, payload }) => {
        if (active) {
            return (
                <div className="custom-tooltip2">
                    <p className="tooltip-label2">{`${payload[0].value} min`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="duration">
            <div className="duration-layer"></div>
            <p className="duration-text">Durée moyenne des sessions</p>
            <ResponsiveContainer className="line-chart-container" width="100%" aspect={1}>
                <LineChart
                    width={500}
                    height={300}
                    data={chartData}
                    margin={{
                        top: 5,
                        bottom: 5,
                        left: -55.5,
                    }}
                >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} horizontal={false} />
                    <XAxis dataKey="name" axisLine={false} stroke="#FFFFFF" />
                    <YAxis
                        axisLine={false}
                        tick={false}
                    />
                    <Tooltip content={<CustomTooltip />} />
                    <Line
                        type="monotone"
                        dataKey="duration"
                        stroke="#D8D8D8"
                        activeDot={{ r: 8 }}
                        dot={false}
                        strokeWidth={1.5}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )

}

export default Duration