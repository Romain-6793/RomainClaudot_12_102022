

import '../../../styles/Hero/MainInfo/MainInfo.css'

import Activity from './Activity'
import Duration from './Duration'
import Skills from './Skills'
import Score from './Score'
import PropTypes from 'prop-types'


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