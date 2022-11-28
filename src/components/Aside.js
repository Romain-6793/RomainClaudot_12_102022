

import '../styles/Aside.css'
import zenIcon from '../assets/icon-zen.svg'
import swimIcon from '../assets/icon-swim.svg'
import bikeIcon from '../assets/icon-bike.svg'
import muscleIcon from '../assets/icon-bike.svg'

function Aside() {
    return (
        <aside className="aside">
            <div className="aside-nav">
                <button className="aside-btn"><img src={zenIcon} className="aside-image" alt="yoga"></img></button>
                <button className="aside-btn"><img src={swimIcon} className="aside-image" alt="swimming"></img></button>
                <button className="aside-btn"><img src={bikeIcon} className="aside-image" alt="biking"></img></button>
                <button className="aside-btn"><img src={muscleIcon} className="aside-image" alt="muscling"></img></button>
            </div>
            <div className="copyrights-div">
                <span className="copyrights">Copyright, Sportsee, 2020</span>
            </div>
        </aside>
    )

}

export default Aside