
import '../styles/Banner.css'
import { useState } from 'react'

function Banner(props) {

    // eslint-disable-next-line no-unused-vars
    const [isAchieved, setIsAchieved] = useState(true)

    const data = props.data
    const firstName = data.USER_MAIN_DATA[0].userInfos.firstName


    return (
        <div className="banner">
            <h2>Bonjour {firstName}</h2>
            {isAchieved ? <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p> :
                <p>Courage ! Vous pouvez atteindre vos objectifs 💪</p>}
        </div>
    )

}

export default Banner