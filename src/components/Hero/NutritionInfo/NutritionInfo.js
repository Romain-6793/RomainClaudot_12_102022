
import '../../../styles/Hero/NutritionInfo/NutritionInfo.css'

import NutritionCard from './NutritionCard'


function NutritionInfo(props) {

    const data = props.data
    const calorieCount = data.USER_MAIN_DATA[0].keyData.calorieCount
    const proteinCount = data.USER_MAIN_DATA[0].keyData.proteinCount
    const carbohydrateCount = data.USER_MAIN_DATA[0].keyData.carbohydrateCount
    const lipidCount = data.USER_MAIN_DATA[0].keyData.lipidCount

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