
import '../../../styles/Hero/MainInfo/Duration.css'
import DayDuration from './DayDuration'


function Duration(props) {

    const data = props.data
    const sessions = data.USER_AVERAGE_SESSIONS[0].sessions

    return (
        <div className="duration">{sessions.map((index) => (
            <DayDuration data={data} day={index.day} length={index.sessionLength} key={`${index}-${index.day}`} />
        ))}</div>
    )

}

export default Duration