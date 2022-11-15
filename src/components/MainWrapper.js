
import "../styles/MainWrapper.css"

import Aside from "./Aside"
import Hero from "./Hero/Hero"


function MainWrapper(props) {


    return (
        <div className="main-wrapper">
            <Aside /><Hero data={props.data} />
        </div>
    )

}

export default MainWrapper