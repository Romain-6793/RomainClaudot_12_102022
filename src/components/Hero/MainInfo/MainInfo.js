

import '../../../styles/Hero/MainInfo/MainInfo.css'

import Activity from './Activity'
import Duration from './Duration'
import Skills from './Skills'
import Score from './Score'
import PropTypes from 'prop-types'

/**
 * 
 * @param {activitySessions} array of sessions with kilograms related to calories
 * @param {averageSessions} array of sessions with duration related to days of the week
 * @param {skillData} array of skills related to performance data
 * @param {score} number between 0 and 1 to be comverted in percents
 * @returns the div "main-info" in which are organized the different charts where our params are exploited
 */

function MainInfo({ activitySessions, averageSessions, skillData, score }) {

    return (
        <div className="main-info">
            <Activity activitySessions={activitySessions} />
            <Duration averageSessions={averageSessions} />
            <Skills skillData={skillData} />
            <Score score={score} />
        </div>
    )
}

MainInfo.propTypes = {
    activitySessions: PropTypes.array,
    averageSessions: PropTypes.array,
    skillData: PropTypes.array,
    score: PropTypes.number,
}

export default MainInfo