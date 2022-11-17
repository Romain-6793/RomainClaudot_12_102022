

import '../../../styles/Hero/MainInfo/MainInfo.css'

import Activity from './Activity'
import Duration from './Duration'
import Skills from './Skills'
import Score from './Score'


function MainInfo(props) {

    const activitySessions = props.activitySessions.current
    const averageSessions = props.averageSessions.current
    const skillData = props.skillData.current
    const skillKind = props.skillKind.current
    const score = props.score.current

    return (
        <div className="main-info">
            <Activity activitySessions={activitySessions} />
            <Duration averageSessions={averageSessions} />
            <Skills
                skillData={skillData}
                skillKind={skillKind} />
            <Score score={score} />
        </div>
    )
}

export default MainInfo