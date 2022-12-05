

import '../styles/Header.css'
import logo from '../assets/sportsee-logo.svg'
import Nav from './Nav'
import PropTypes from 'prop-types'


function Header({ data }) {
    return (
        <header className="header"><Nav data={data} />
            <img className="sportsee-logo" src={logo} alt="logo du site sportsee"></img>
        </header>
    )

}


Header.propTypes = {
    data: PropTypes.object
}

export default Header