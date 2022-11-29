

import '../../../styles/Hero/MainInfo/MainInfo.css'

import Activity from './Activity'
import Duration from './Duration'
import Skills from './Skills'
import Score from './Score'


function MainInfo(props) {

    const activitySessions = props.activitySessions
    const averageSessions = props.averageSessions
    const skillData = props.skillData
    const score = props.score

    return (
        <div className="main-info">
            <Activity activitySessions={activitySessions} />
            <Duration averageSessions={averageSessions} />
            <Skills skillData={skillData} />
            <Score score={score} />
        </div>
    )
}

export default MainInfo