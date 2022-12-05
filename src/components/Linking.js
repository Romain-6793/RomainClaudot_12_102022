
import '../styles/Linking.css'

import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

function Linking({ firstName, id, closeDropdown }) {


    return (
        <Link className="user-link" to={`/user/${id}`} onClick={closeDropdown}>{firstName}</Link>
    )
}

Linking.propTypes = {
    firstName: PropTypes.string,
    id: PropTypes.number,
    closeDropdown: PropTypes.func,

}

export default Linking