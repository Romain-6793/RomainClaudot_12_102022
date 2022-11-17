
import '../../styles/Hero/Hero.css'

import Banner from './Banner'
import MainInfo from './MainInfo/MainInfo'
import NutritionInfo from './NutritionInfo/NutritionInfo'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'


function Hero(props) {

    //Ici on va gérer l'affichage conditionnel des données que l'on va faire remonter en props.

    const data = props.data

    // Ou bien mettre un objet vide dans le useState ou data.USER_MAIN_DATA[0]. Tout dépend du choix.
    // Il faudra peut-être supprimer le DD.
    const [loading, setLoading] = useState(false)
    const [basicUser, setUser] = useState(data.USER_MAIN_DATA[0])
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
            // getUser();
            const activity = data.USER_ACTIVITY.filter(item => item.userId === Number(id))
            const avSessions = data.USER_AVERAGE_SESSIONS.filter(item => item.userId === Number(id))
            const skills = data.USER_PERFORMANCE.filter(item => item.userId === Number(id))

            if (user) {
                setUser(user);
                setActivity(activity);
                setSessions(avSessions);
                setSkills(skills);
                firstName.current = user[0].userInfos.firstName
                activitySessions.current = activity[0].sessions
                averageSessions.current = avSessions[0].sessions
                skillData.current = skills[0].data
                skillKind.current = skills[0].kind
                score.current = user[0].todayScore || user[0].score
                keyData.current = user[0].keyData

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