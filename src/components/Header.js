

import '../styles/Header.css'
import logo from '../assets/sportsee-logo.svg'
import Nav from './Nav'


function Header(props) {
    return (
        <header className="header"><Nav data={props.data} />
            <img className="sportsee-logo" src={logo} alt="logo du site sportsee"></img>
        </header>
    )

}

export default Header