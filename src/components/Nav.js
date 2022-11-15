
import '../styles/Nav.css'
import { useState } from 'react'
// import { Link } from 'react-router-dom'

function Nav() {

    const [isOpen, setIsOpen] = useState(false)


    return isOpen ? (
        <>
            <nav className="nav">
                <button>Accueil</button>
                <button onClick={() => setIsOpen(false)}>Profil</button>
                <button>Réglage</button>
                <button>Communauté</button>
            </nav>
            <div className="profile-dropdown">
                <span>Karl</span>
                <span>Cecilia</span>
            </div>
        </>
    ) : (
        <nav className="nav">
            <button>Accueil</button>
            <button onClick={() => setIsOpen(true)}>Profil</button>
            <button>Réglage</button>
            <button>Communauté</button>
        </nav>
    )
}

export default Nav