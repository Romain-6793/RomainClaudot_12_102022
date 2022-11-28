

import '../../../styles/Hero/MainInfo/Activity.css'
// import DayActivity from './DayActivity'
// eslint-disable-next-line no-unused-vars
import React, { PureComponent, useEffect } from 'react'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


function Activity(props) {


    const activitySessions = props.activitySessions

    useEffect(() => {
        let highestWeight = 0
        let lowestWeight = 0
        let middleWeight = 0
        let weightArray = [activitySessions.map((index) => (index.kilogram))]


        highestWeight = Math.max(...weightArray[0])
        lowestWeight = Math.min(...weightArray[0])
        // eslint-disable-next-line no-unused-vars
        middleWeight = Math.floor(lowestWeight + ((highestWeight - lowestWeight) / 2))


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

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
                    <Tooltip />
                    <Bar dataKey="kilogram" fill="#282D30" barSize={8} radius={[3.5, 3.5, 0, 0]} />
                    <Bar dataKey="calories" fill="#E60000" barSize={8} radius={[3.5, 3.5, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
        // <div className="activity">{activitySessions.map((index) => (
        //     <DayActivity
        //         day={index.day}
        //         kilogram={index.kilogram}
        //         calories={index.calories}
        //         key={`${index}-${index.day}`}
        //     />
        // ))}</div>
    )

}

export default Activity