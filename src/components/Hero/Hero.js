/* eslint-disable react-hooks/exhaustive-deps */

import '../../styles/Hero/Hero.css'

import Banner from './Banner'
import MainInfo from './MainInfo/MainInfo'
import NutritionInfo from './NutritionInfo/NutritionInfo'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'


function Hero(props) {

    //Ici on va gérer l'affichage conditionnel des données que l'on va faire remonter en props.
    const { id } = useParams()
    const BASE_URL = `http://localhost:3000/user/${id}`
    const URLS = [
        BASE_URL,
        `${BASE_URL}/activity`,
        `${BASE_URL}/average-sessions`,
        `${BASE_URL}/performance`
    ]

    const data = props.data

    // Comment me passer de ces variables ?

    let firstName = useRef(data.USER_MAIN_DATA[0].userInfos.firstName)
    let keyData = useRef(data.USER_MAIN_DATA[0].keyData)
    let score = useRef(data.USER_MAIN_DATA[0].todayScore)
    let activitySessions = useRef(data.USER_ACTIVITY[0].sessions)
    let averageSessions = useRef(data.USER_AVERAGE_SESSIONS[0].sessions)
    let skillData = useRef(data.USER_PERFORMANCE[0].data)
    let skillKind = useRef(data.USER_PERFORMANCE[0].kind)


    // eslint-disable-next-line no-unused-vars
    const [response, loading, hasError] = useFetch(BASE_URL, URLS)

    console.log(response)



    function useFetch(url, urls) {
        const [response, setResponse] = useState(null)
        const [loading, setLoading] = useState(false)
        const [hasError, setHasError] = useState(false)
        useEffect(() => {
            setLoading(true)
            Promise.all(urls.map(url =>
                fetch(url)
                    .then(res => res.json())
            ))
                .then((data) => {
                    setResponse(data)
                    setHasError(false)
                    setLoading(false)
                    firstName.current = response[0].data.userInfos.firstName
                    activitySessions.current = response[1].data.sessions
                    averageSessions.current = response[2].data.sessions
                    skillData.current = response[3].data.data
                    skillKind.current = response[3].data.kind
                    score.current = response[0].data.todayScore || response[0].data.score
                    keyData.current = response[0].data.keyData

                })
                .catch(err => {
                    setHasError(true)
                    setLoading(false)
                })



        }, [url])

        return [response, loading, hasError]


    }

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