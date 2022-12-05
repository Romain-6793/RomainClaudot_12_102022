
import '../../styles/Hero/Banner.css'
import { useState } from 'react'
import PropTypes from 'prop-types'

function Banner({ firstName }) {

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

Banner.propTypes = {
    firstName: PropTypes.string,
}


export default Banner