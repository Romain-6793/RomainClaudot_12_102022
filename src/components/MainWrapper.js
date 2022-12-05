
import "../styles/MainWrapper.css"

import Aside from "./Aside"
import Hero from "./Hero/Hero"

/**
 * 
 * @returns the whole content of the page except the header
 */

function MainWrapper() {


    return (
        <div className="main-wrapper">
            <Aside /><Hero />
        </div>
    )

}

export default MainWrapper