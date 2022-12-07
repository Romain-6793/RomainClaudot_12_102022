
import '../../../styles/Hero/MainInfo/Duration.css'

import React, { useState } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';

/**
 * 
 * @param {averageSessions} array of data to exploit in the LineChart
 * @returns the div "duration" with all the infos, including the responsive LineChart, size of the chart
 * depending on size of the screen.
 */

function Duration({ averageSessions }) {

    const [isSmall, setIsSmall] = useState({ matches: window.matchMedia("(max-width: 1439px)").matches });

    function screenListener() {
        const handler = e => setIsSmall({ matches: e.matches });
        window.matchMedia("(max-width: 1439px)").addEventListener('change', handler);
    }

    screenListener()

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

    /**
     * 
     * @param {active} checks if cursor hovers the concerned dash
     * @param {payload} is the array of values to be rendered in the ToolTip
     * @returns the Tooltip if active, else, returns null
     */

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

    return isSmall.matches ? (
        <div className="duration">
            <div className="duration-layer"></div>
            <p className="duration-text">Durée moyenne des sessions</p>
            <ResponsiveContainer className="line-chart-container" width="100%" height="100%">
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
    ) : (
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

Duration.propTypes = {
    averageSessions: PropTypes.arrayOf(PropTypes.shape({
        day: PropTypes.number,
        sessionLength: PropTypes.number,

    }))
}

export default Duration