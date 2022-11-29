
import '../styles/Linking.css'

import { Link } from "react-router-dom"

function Linking(props) {

    const firstName = props.firstName
    const id = props.id

    return (
        <Link className="user-link" to={`/user/${id}`} onClick={props.closeDropdown}>{firstName}</Link>
    )
}

export default Linking