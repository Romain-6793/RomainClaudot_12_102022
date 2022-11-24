
import '../../../styles/Hero/NutritionInfo/NutritionInfo.css'

import NutritionCard from './NutritionCard'


function NutritionInfo(props) {

    const keyData = props.keyData
    const calorieCount = keyData.calorieCount
    const proteinCount = keyData.proteinCount
    const carbohydrateCount = keyData.carbohydrateCount
    const lipidCount = keyData.lipidCount

    //Mettre également l'image dans les props

    return (
        <div className="nutrition-info">
            <NutritionCard name="Calories" count={`${calorieCount}kCal`} />
            <NutritionCard name="Proteines" count={`${proteinCount}g`} />
            <NutritionCard name="Glucides" count={`${carbohydrateCount}g`} />
            <NutritionCard name="Lipides" count={`${lipidCount}g`} />
        </div>
    )
}

export default NutritionInfo