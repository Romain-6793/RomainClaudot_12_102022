/* eslint-disable react-hooks/exhaustive-deps */

import '../../styles/Hero/Hero.css'

import Banner from './Banner'
import MainInfo from './MainInfo/MainInfo'
import NutritionInfo from './NutritionInfo/NutritionInfo'
import { useParams } from 'react-router-dom'
import { useState, useEffect, useRef } from 'react'


function Hero(props) {

    //Ici on va gérer l'affichage conditionnel des données que l'on va faire remonter en props.

    const data = props.data

    // Comment me passer de ces variables ?

    let firstName = useRef(data.USER_MAIN_DATA[0].userInfos.firstName)
    let keyData = useRef(data.USER_MAIN_DATA[0].keyData)
    let score = useRef(data.USER_MAIN_DATA[0].todayScore)
    let activitySessions = useRef(data.USER_ACTIVITY[0].sessions)
    let averageSessions = useRef(data.USER_AVERAGE_SESSIONS[0].sessions)
    let skillData = useRef(data.USER_PERFORMANCE[0].data)
    let skillKind = useRef(data.USER_PERFORMANCE[0].kind)
    const BASE_URL = `http://localhost:3000`
    const { id } = useParams()
    // eslint-disable-next-line no-unused-vars
    const [response, loading, hasError] = useFetch(`${BASE_URL}/user/${id}`)
    // || (`${BASE_URL}/user/${id}/activity`)
    // || (`${BASE_URL}/user/${id}/average-sessions`)
    // || (`${BASE_URL}/user/${id}/performance`)
    console.log(response)
    // firstName.current = response.data.userInfos.firstName
    // console.log(firstName.current)


    function useFetch(url, opts) {
        const [response, setResponse] = useState(null)
        const [loading, setLoading] = useState(false)
        const [hasError, setHasError] = useState(false)
        useEffect(() => {
            setLoading(true)
            fetch(url, opts)
                .then((res) => {
                    if (res.ok) {
                        return res.json();
                    }
                })
                .then((res) => {
                    setResponse(res)
                    console.log(res)
                    setLoading(false)
                    firstName.current = res.data.userInfos.firstName
                    // activitySessions.current = activity[0].sessions
                    // averageSessions.current = avSessions[0].sessions
                    // skillData.current = skills[0].data
                    // skillKind.current = skills[0].kind
                    score.current = res.data.todayScore || res.data.score
                    keyData.current = res.data.keyData
                }
                )
                .catch(err => {
                    setHasError(true)
                    setLoading(false)
                });

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