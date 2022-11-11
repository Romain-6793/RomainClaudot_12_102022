
import '../styles/Hero.css'

import Banner from './Banner'
import MainInfo from './MainInfo'
import NutritionInfo from './NutritionInfo'


function Hero(props) {

    return (
        <div className="hero">
            <Banner data={props.data} /><MainInfo data={props.data} /><NutritionInfo data={props.data} />
        </div>
    )
}

export default Hero