
import '../../styles/Hero/Banner.css'
import { useState } from 'react'

function Banner(props) {


    const firstName = props.firstName

    // eslint-disable-next-line no-unused-vars
    const [isAchieved, setIsAchieved] = useState(true)


    return (
        <div className="banner">
            <h2>Bonjour {firstName}</h2>
            {isAchieved ? <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p> :
                <p>Courage ! Vous pouvez atteindre vos objectifs 💪</p>}
        </div>
    )

}

export default Banner