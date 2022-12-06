

import '../styles/Header.css'
import logo from '../assets/sportsee-logo.svg'
import Nav from './Nav'



function Header() {
    return (
        <header className="header"><Nav />
            <img className="sportsee-logo" src={logo} alt="logo du site sportsee"></img>
        </header>
    )

}

export default Header