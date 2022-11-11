
import "../styles/MainWrapper.css"

import Aside from "./Aside"
import Hero from "./Hero"


function MainWrapper() {
    return (
        <div className="main-wrapper">
            <Aside /><Hero />
        </div>
    )

}

export default MainWrapper