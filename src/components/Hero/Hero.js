
import '../../styles/Hero/Hero.css'

import Banner from './Banner'
import MainInfo from './MainInfo/MainInfo'
import NutritionInfo from './NutritionInfo/NutritionInfo'


function Hero(props) {

    return (
        <div className="hero">
            <Banner data={props.data} /><MainInfo data={props.data} /><NutritionInfo data={props.data} />
        </div>
    )
}

export default Hero