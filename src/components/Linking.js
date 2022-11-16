
import { Link } from "react-router-dom"

function Linking(props) {

    const firstName = props.firstName
    const id = props.id

    return (
        <Link to={`/main/${id}`}>{firstName}</Link>
    )
}

export default Linking