

import '../styles/MainInfo.css'

import Activity from './Activity'
import Duration from './Duration'
import Skills from './Skills'
import Score from './Score'


function MainInfo() {
    return (
        <div className="main-info">
            <Activity /><Duration /><Skills /><Score />
        </div>
    )
}

export default MainInfo