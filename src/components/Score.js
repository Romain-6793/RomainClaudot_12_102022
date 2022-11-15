
import '../styles/Score.css'

function Score(props) {

    const data = props.data
    const score = data.USER_MAIN_DATA[0].todayScore

    return (
        <div className="score">
            <span>score</span>
            <span>{score * 100}%</span>
            <span>de votre objectif</span>
        </div>
    )

}

export default Score