

import '../styles/Header.css'
import Nav from './Nav'

function Header(props) {
    return (
        <header className="header"><Nav data={props.data} /></header>
    )

}

export default Header