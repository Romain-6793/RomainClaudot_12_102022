
import '../../../styles/Hero/NutritionInfo/NutritionCard.css'
import PropTypes from 'prop-types'

/**
 * 
 * @param {img} string containing the right img url to display
 * @param {count} string containing the right count to display
 * @param {name} string containing the right name to display
 * @returns the div "nutrition-card" with all the wanted infos
 */

function NutritionCard({ img, count, name }) {
    return (
        <div className="nutrition-card">
            <img src={img} alt="icone des éléments nutritifs" className="nutrition-icon"></img>
            <div className="nutrition-display">
                <p className="nutrition-text"><span className="nutrition-count">{count}</span><br />{name}</p>
            </div>
        </div>
    )

}

NutritionCard.propTypes = {
    img: PropTypes.string,
    count: PropTypes.string,
    name: PropTypes.string,
}

export default NutritionCard