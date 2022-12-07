
import '../../../styles/Hero/NutritionInfo/NutritionInfo.css'

import NutritionCard from './NutritionCard'

import caloriesIcon from '../../../assets/calories-icon.svg'
import proteinIcon from '../../../assets/protein-icon.svg'
import carbsIcon from '../../../assets/carbs-icon.svg'
import fatIcon from '../../../assets/fat-icon.svg'

import PropTypes from 'prop-types'

/**
 * 
 * @param {keyData} object containing all the values "counts" of each nutrition category 
 * @returns the div "nutrition-info" with all the informations : count, name and icon matching to
 * each NutritionCard category
 */

function NutritionInfo({ keyData }) {

    const calorieCount = keyData.calorieCount
    const proteinCount = keyData.proteinCount
    const carbohydrateCount = keyData.carbohydrateCount
    const lipidCount = keyData.lipidCount

    //Mettre également l'image dans les props

    return (
        <div className="nutrition-info">
            <NutritionCard name="Calories" count={`${calorieCount}kCal`} img={caloriesIcon} />
            <NutritionCard name="Proteines" count={`${proteinCount}g`} img={proteinIcon} />
            <NutritionCard name="Glucides" count={`${carbohydrateCount}g`} img={carbsIcon} />
            <NutritionCard name="Lipides" count={`${lipidCount}g`} img={fatIcon} />
        </div>
    )
}

NutritionInfo.propTypes = {
    keyData: PropTypes.objectOf(PropTypes.number)
}

export default NutritionInfo