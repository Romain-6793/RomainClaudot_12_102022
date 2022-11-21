
import '../../styles/Hero/Hero.css'

import Banner from './Banner'
import MainInfo from './MainInfo/MainInfo'
import NutritionInfo from './NutritionInfo/NutritionInfo'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'


function Hero(props) {

    //Ici on va gérer l'affichage conditionnel des données que l'on va faire remonter en props.

    const data = props.data

    const BASE_URL = `http://localhost:3000`
    const { id } = useParams()

    const [data2, setData2] = useState({})
    const [loading, setLoading] = useState(false)
    const [hasError, setHasError] = useState(false)


    useEffect(() => {
        setLoading(true)
        fetch(`${BASE_URL}/user/${id}`)
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
            })
            .then(
                (res) => setData2(res)
            )
            .catch(err => {
                setHasError(true)
                setLoading(false)
            });

        setLoading(false)
        console.log(data2)

    }, [id])

    // useEffect(() => {
    //     // setLoading(true);
    //     if (id) {
    //         // const user = data.USER_MAIN_DATA.filter(item => item.id === Number(id));

    //         const activity = data.USER_ACTIVITY.filter(item => item.userId === Number(id))
    //         const avSessions = data.USER_AVERAGE_SESSIONS.filter(item => item.userId === Number(id))
    //         const skills = data.USER_PERFORMANCE.filter(item => item.userId === Number(id))

    //         const getUser = async () => {
    //             const user = await fetch(`${BASE_URL}/user/18`).then(
    //                 res => setUser(res.user)
    //             );
    //             if (user) {
    //                 setUser(user)
    //                 console.log(user)
    //                 setLoading(false)
    //             }
    //         }

    //         getUser()

    //         // if (user) {
    //         //     setUser(user);
    //         //     // setActivity(activity);
    //         //     // setSessions(avSessions);
    //         //     // setSkills(skills);
    //         //     firstName.current = user[0].userInfos.firstName
    //         //     activitySessions.current = activity[0].sessions
    //         //     averageSessions.current = avSessions[0].sessions
    //         //     skillData.current = skills[0].data
    //         //     skillKind.current = skills[0].kind
    //         //     score.current = user[0].todayScore || user[0].score
    //         //     keyData.current = user[0].keyData

    //         // }
    //         // setLoading(false);
    //     }
    //     // eslint-disable-next-line react-hooks/exhaustive-deps
    // }, [id])


    // Ou bien mettre un objet vide dans le useState ou data.USER_MAIN_DATA[0]. Tout dépend du choix.
    // Il faudra peut-être supprimer le DD.
    let firstName = useRef(data.USER_MAIN_DATA[0].userInfos.firstName)
    let keyData = useRef(data.USER_MAIN_DATA[0].keyData)
    let score = useRef(data.USER_MAIN_DATA[0].todayScore)
    // || useRef(data.USER_MAIN_DATA[0].score)
    // eslint-disable-next-line no-unused-vars
    const [basicActivity, setActivity] = useState(data.USER_ACTIVITY[0])
    let activitySessions = useRef(data.USER_ACTIVITY[0].sessions)
    // eslint-disable-next-line no-unused-vars
    const [basicSessions, setSessions] = useState(data.USER_AVERAGE_SESSIONS[0])
    let averageSessions = useRef(data.USER_AVERAGE_SESSIONS[0].sessions)
    // eslint-disable-next-line no-unused-vars
    const [basicSkills, setSkills] = useState(data.USER_PERFORMANCE[0])
    let skillData = useRef(data.USER_PERFORMANCE[0].data)
    let skillKind = useRef(data.USER_PERFORMANCE[0].kind)




    // const getUser = async () => {
    //     const user = await getUser(`${BASE_URL}/user/${id}`);
    //     if (user) setUser(user)
    //      setLaoding(false)
    // }




    if (hasError) {
        return <div>No user to display</div>
    }
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div className="hero">
            <Banner firstName={firstName} />
            <MainInfo
                activitySessions={activitySessions}
                averageSessions={averageSessions}
                skillData={skillData}
                skillKind={skillKind}
                score={score}
            />
            <NutritionInfo keyData={keyData} />
        </div>
    )
}

export default Hero