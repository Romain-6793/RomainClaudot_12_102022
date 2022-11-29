
import '../../../styles/Hero/MainInfo/Score.css'
// eslint-disable-next-line no-unused-vars
import React, { PureComponent } from 'react';
import { RadialBarChart, RadialBar, PolarAngleAxis, ResponsiveContainer } from 'recharts';




function Score(props) {


    const score = props.score


    const chartData = [
        {
            name: '18-24',
            uv: score * 100,
            fill: "#FF0101",
        },

    ];


    return (
        <div className="score">
            <div className="score-title">Score</div>
            <div className="score-display">
                <p className="score-text"><span className="score-number">{score * 100}%</span> de votre objectif</p>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <RadialBarChart
                    cx="50%"
                    cy="50%"
                    innerRadius="75%"
                    outerRadius="90%"
                    barSize={10}
                    data={chartData}
                    transform="rotate(-90 0 0)"
                >
                    <PolarAngleAxis type="number" domain={[0, 100]} tick={false} />
                    <RadialBar
                        minAngle={15}
                        background
                        clockWise
                        dataKey="uv"
                        cornerRadius={5}
                    />
                </RadialBarChart>
            </ResponsiveContainer>
        </div>
    )

}

export default Score