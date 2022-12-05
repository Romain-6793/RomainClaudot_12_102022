

import '../../../styles/Hero/MainInfo/Activity.css'
// eslint-disable-next-line no-unused-vars
import React, { PureComponent, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import PropTypes from 'prop-types';


function Activity({ activitySessions }) {

    const chartData = [
        {
            name: '1',
            kilogram: activitySessions[0].kilogram,
            calories: activitySessions[0].calories,
        },
        {
            name: '2',
            kilogram: activitySessions[1].kilogram,
            calories: activitySessions[1].calories,
        },
        {
            name: '3',
            kilogram: activitySessions[2].kilogram,
            calories: activitySessions[2].calories,
        },
        {
            name: '4',
            kilogram: activitySessions[3].kilogram,
            calories: activitySessions[3].calories,
        },
        {
            name: '5',
            kilogram: activitySessions[4].kilogram,
            calories: activitySessions[4].calories,
        },
        {
            name: '6',
            kilogram: activitySessions[5].kilogram,
            calories: activitySessions[5].calories,
        },
        {
            name: '7',
            kilogram: activitySessions[6].kilogram,
            calories: activitySessions[6].calories,
        },
    ];

    const CustomTooltip = ({ active, payload }) => {
        if (active) {
            return (
                <div className="custom-tooltip">
                    <p className="tooltip-label">{`${payload[0].value}kg`}</p>
                    <p className="tooltip-label">{`${payload[1].value}kCal`}</p>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="activity">
            <div className="activity-banner">
                <span className="activity-title">Activité quotidienne</span>
                <div className="activity-legend">
                    <div className="black-circle"></div>
                    <span className="kilograms-text">Poids (kg)</span>
                    <div className="red-circle"></div>
                    <span className="calories-text">Calories brûlées (kCal)</span>
                </div>
            </div>
            <ResponsiveContainer width="100%" aspect={3}>
                <BarChart
                    width={500}
                    height={300}
                    data={chartData}
                    margin={{
                        top: 5,
                        left: 10,
                        bottom: 5,
                    }}
                    barGap={10}
                >
                    <CartesianGrid
                        strokeDasharray="3 3"
                        vertical={false} />
                    <XAxis dataKey="name" />
                    <YAxis orientation="right" axisLine={false} />
                    <Tooltip content={<CustomTooltip />} />
                    <Bar dataKey="kilogram" fill="#282D30" barSize={8} radius={[3.5, 3.5, 0, 0]} />
                    <Bar dataKey="calories" fill="#E60000" barSize={8} radius={[3.5, 3.5, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )

}

Activity.propTypes = {
    activitySessions: PropTypes.array,
}

export default Activity

