
import { Link } from "react-router-dom"

function Linking(props) {

    const firstName = props.firstName
    console.log(firstName)

    return (
        <Link to>{firstName}</Link>
    )
}

export default Linking