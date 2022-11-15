
import '../styles/NutritionCard.css'

function NutritionCard(props) {
    return (
        <div className="nutrition-card">
            <span>{props.name}</span>
            <span>{props.count}</span>
        </div>
    )

}

export default NutritionCard