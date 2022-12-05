
import '../styles/Nav.css'
import { useState } from 'react'
import Linking from './Linking'
import PropTypes from 'prop-types'

/**
 * 
 * @param {data} object in which we recover the users firstnames to create a dropdown (data.js)
 * @returns the nav menu with each button, the dropdown and the function that allows to open and close it
 */

function Nav({ data }) {

    const userdata = data.USER_MAIN_DATA

    const [isOpen, setIsOpen] = useState(false)


    return isOpen ? (
        <>
            <nav className="nav">
                <button className="header-btn">Accueil</button>
                <button className="header-btn" onClick={() => setIsOpen(false)}>Profil</button>
                <button className="header-btn">Réglage</button>
                <button className="header-btn">Communauté</button>
            </nav>
            <div className="profile-dropdown">
                {userdata.map((index) => (
                    <Linking data={data}
                        firstName={index.userInfos.firstName}
                        key={index.id} id={index.id}
                        closeDropdown={() => setIsOpen(false)} />
                ))}
            </div>
        </>
    ) : (
        <nav className="nav">
            <button className="header-btn">Accueil</button>
            <button className="header-btn" onClick={() => setIsOpen(true)}>Profil</button>
            <button className="header-btn">Réglage</button>
            <button className="header-btn">Communauté</button>
        </nav>
    )
}

Nav.propTypes = {
    data: PropTypes.object,
}

export default Nav