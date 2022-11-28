
import '../../styles/Hero/Banner.css'
import { useState } from 'react'

function Banner(props) {


    const firstName = props.firstName

    // eslint-disable-next-line no-unused-vars
    const [isAchieved, setIsAchieved] = useState(true)


    return (
        <div className="banner">
            <h2 className="hello">Bonjour <span className="firstname">{firstName}</span></h2>
            {isAchieved ? <p className="daily-message">Félicitations ! Vous avez explosé vos objectifs hier 👏</p> :
                <p p className="daily-message">Courage ! Vous pouvez atteindre vos objectifs 💪</p>}
        </div>
    )

}

export default Banner