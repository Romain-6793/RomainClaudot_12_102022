

import '../../../styles/Hero/MainInfo/Skills.css'
import PropTypes from 'prop-types'

// eslint-disable-next-line no-unused-vars
import React, { PureComponent, useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

/**
 * 
 * @param {skillData} array of skills related to performance data
 * @returns the div "skills" with all the informations, including the responsive RadarChart
 */

function Skills({ skillData }) {

    const [isSmall, setIsSmall] = useState({ matches: window.matchMedia("(max-width: 1439px)").matches });

    function screenListener() {
        const handler = e => setIsSmall({ matches: e.matches });
        window.matchMedia("(max-width: 1439px)").addEventListener('change', handler);
    }

    screenListener()

    const chartData = [
        {
            subject: 'Intensité',
            score: skillData[5].value
        },
        {
            subject: 'Vitesse',
            score: skillData[4].value
        },
        {
            subject: 'Force',
            score: skillData[3].value
        },
        {
            subject: 'Endurance',
            score: skillData[2].value
        },
        {
            subject: 'Energie',
            score: skillData[1].value
        },
        {
            subject: 'Cardio',
            score: skillData[0].value
        },
    ];

    return (
        <div className="skills">
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart cx="50%" cy="50%" outerRadius="80%" data={chartData}>
                    <PolarGrid stroke="#FFFFFF" radialLines={false} />
                    <PolarAngleAxis dataKey="subject" tick={isSmall.matches ? ({ fontSize: 7 }) : ({ fontSize: 10 })} stroke="#FFFFFF" />
                    <Radar dataKey="score" stroke="#FF0101" fill="#FF0101" fillOpacity={0.6} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )

}

Skills.propTypes = {
    skillData: PropTypes.array,
}

export default Skills