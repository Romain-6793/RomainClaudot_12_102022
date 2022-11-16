
import '../styles/Nav.css'
import { useState } from 'react'
import Linking from './Linking'

function Nav(props) {

    const data = props.data
    const userdata = data.USER_MAIN_DATA

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
                {userdata.map((index) => (
                    <Linking data={data} firstName={index.userInfos.firstName} key={index.id} id={index.id} />
                ))}
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