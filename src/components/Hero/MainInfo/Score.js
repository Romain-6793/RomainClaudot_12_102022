
import '../../../styles/Hero/MainInfo/Score.css'

function Score(props) {


    const score = props.score

    return (
        <div className="score">
            <span>score</span>
            <span>{score * 100}%</span>
            <span>de votre objectif</span>
        </div>
    )

}

export default Score