

import '../styles/Header.css'
import logo from '../assets/sportsee-logo.svg'
import Nav from './Nav'
import PropTypes from 'prop-types'


/**
 * 
 * @param {data} object in which we recover the users firstnames to create a dropdown (data.js)
 * @returns a header including the nav, which includes itself a dropdown 
 */

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