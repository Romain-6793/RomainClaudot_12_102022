

import '../../../styles/Hero/MainInfo/MainInfo.css'

import Activity from './Activity'
import Duration from './Duration'
import Skills from './Skills'
import Score from './Score'


function MainInfo(props) {
    return (
        <div className="main-info">
            <Activity data={props.data} />
            <Duration data={props.data} />
            <Skills data={props.data} />
            <Score data={props.data} />
        </div>
    )
}

export default MainInfo