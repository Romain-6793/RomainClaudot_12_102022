
import '../styles/Banner.css'

function Banner(props) {


    const data = props.data
    console.log(data)
    const firstName = data.USER_MAIN_DATA[0].userInfos.firstName

    return (
        <div className="banner">
            <h2>Bonjour {firstName}</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            {/* Changer la phrase si l'objectif est atteint ou non */}
        </div>
    )

}

export default Banner