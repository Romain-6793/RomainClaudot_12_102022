
import '../../../styles/Hero/MainInfo/Duration.css'
import DayDuration from './DayDuration'


function Duration(props) {

    const averageSessions = props.averageSessions

    return (
        <div className="duration">{averageSessions.map((index) => (
            <DayDuration
                day={index.day}
                length={index.sessionLength}
                key={`${index}-${index.day}`}
            />
        ))}</div>
    )

}

export default Duration