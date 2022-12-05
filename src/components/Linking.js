
import '../styles/Linking.css'

import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

/**
 * Function organizing the dropdown link to each profile
 * 
 * @param {firstName} string that contains each profile firstname
 * @param {id}  number that contains each profile id
 * @param {closeDropdown} function that allows to close the dropdown once a link is clicked
 * @returns the wanted user link depending on his id
 */

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