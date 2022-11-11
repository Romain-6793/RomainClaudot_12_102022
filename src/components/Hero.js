
import '../styles/Hero.css'

import Banner from './Banner'
import MainInfo from './MainInfo'
import NutritionInfo from './NutritionInfo'


function Hero() {
    return (
        <div className="hero">
            <Banner /><MainInfo /><NutritionInfo />
        </div>
    )
}

export default Hero