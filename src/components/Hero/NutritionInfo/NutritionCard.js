
import '../../../styles/Hero/NutritionInfo/NutritionCard.css'

function NutritionCard(props) {
    return (
        <div className="nutrition-card">
            <img src={props.img} alt="icone des éléments nutritifs" className="nutrition-icon"></img>
            <div className="nutrition-display">
                <p className="nutrition-text"><span className="nutrition-count">{props.count}</span><br />{props.name}</p>
            </div>
        </div>
    )

}

export default NutritionCard