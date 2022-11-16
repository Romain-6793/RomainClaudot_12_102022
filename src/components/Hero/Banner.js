
import '../../styles/Hero/Banner.css'
import { useState, useEffect, useRef } from 'react'
import { useParams } from 'react-router-dom'


function Banner(props) {

    const data = props.data
    // eslint-disable-next-line no-unused-vars
    const [isAchieved, setIsAchieved] = useState(true)
    // Ou bien mettre un objet vide dans le useState ou data.USER_MAIN_DATA[0]
    const [basicUser, setUser] = useState(data.USER_MAIN_DATA[0])
    const [loading, setLoading] = useState(false)
    let firstName = useRef(data.USER_MAIN_DATA[0].userInfos.firstName)
    console.log(firstName)

    const { id } = useParams()



    // const getUser = async () => {
    //     const user = await getUser(`${BASE_URL}/user/${id}`);
    //     if (user) setUser(user)
    //      setLaoding(false)
    // }

    useEffect(() => {
        // setLoading(true);
        if (id) {
            const user = data.USER_MAIN_DATA.filter(item => item.id === Number(id));
            console.log(user)
            // getUser();
            if (user) {
                setUser(user);
                firstName.current = user[0].userInfos.firstName
                console.log(firstName)
            }
            setLoading(false);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [id])


    if (!basicUser) {
        return <div>No user to display</div>
    }

    if (loading) {
        return <div>Loading...</div>
    }





    return (
        <div className="banner">
            <h2>Bonjour {firstName.current}</h2>
            {isAchieved ? <p>Félicitations ! Vous avez explosé vos objectifs hier 👏</p> :
                <p>Courage ! Vous pouvez atteindre vos objectifs 💪</p>}
        </div>
    )

}

export default Banner