
import '../../styles/Hero/Hero.css'

import Banner from './Banner'
import MainInfo from './MainInfo/MainInfo'
import NutritionInfo from './NutritionInfo/NutritionInfo'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'

function Hero() {

    //Ici on va gérer l'affichage conditionnel des données que l'on va faire remonter en props.

    const { id = 12 } = useParams()

    const BASE_URL = `http://localhost:3000/user/${id}`
    const URLS = [
        BASE_URL,
        `${BASE_URL}/activity`,
        `${BASE_URL}/average-sessions`,
        `${BASE_URL}/performance`
    ]
    // eslint-disable-next-line no-unused-vars
    const [response, loading, hasError] = useFetch(BASE_URL, URLS)
    const [user, setUser] = useState({
        firstName: "Karl",
        metadatas: {
            keyData: { calorieCount: 1930, proteinCount: 155, carbohydrateCount: 290, lipidCount: 50 },
            todayScore: 0.12,
            sessions: {
                activitySessions: [
                    { day: '2020-07-01', kilogram: 80, calories: 240 },
                    { day: '2020-07-02', kilogram: 80, calories: 220 },
                    { day: '2020-07-03', kilogram: 81, calories: 280 },
                    { day: '2020-07-04', kilogram: 81, calories: 290 },
                    { day: '2020-07-05', kilogram: 80, calories: 160 },
                    { day: '2020-07-06', kilogram: 78, calories: 162 },
                    { day: '2020-07-07', kilogram: 76, calories: 390 }],
                averageSessions:
                    [{ day: 1, sessionLength: 30 },
                    { day: 2, sessionLength: 23 },
                    { day: 3, sessionLength: 45 },
                    { day: 4, sessionLength: 50 },
                    { day: 5, sessionLength: 0 },
                    { day: 6, sessionLength: 0 },
                    { day: 7, sessionLength: 60 },
                    ]
            },
            skillData: [
                { value: 80, kind: 1 },
                { value: 120, kind: 2 },
                { value: 140, kind: 3 },
                { value: 50, kind: 4 },
                { value: 200, kind: 5 },
                { value: 90, kind: 6 },
            ],
            skillKind: {
                1: 'cardio',
                2: 'energy',
                3: 'endurance',
                4: 'strength',
                5: 'speed',
                6: 'intensity'
            }
        },

    }
    )

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
                    console.log(data[0])
                    setUser(prev => {
                        return {
                            // La ligne suivante avec le spread permet de reprendre prev et de l'écraser.
                            ...prev,
                            firstName: data[0].data.userInfos.firstName,
                            metadatas: {
                                sessions: {
                                    activitySessions: data[1].data.sessions,
                                    averageSessions: data[2].data.sessions
                                },
                                skillData: data[3].data.data,
                                skillKind: data[3].data.kind,
                                todayScore: data[0].data.todayScore || data[0].data.score,
                                keyData: data[0].data.keyData
                            },
                        }
                    })

                })
                .catch(err => {
                    setHasError(true)
                    setLoading(false)
                })

            // eslint-disable-next-line react-hooks/exhaustive-deps
        }, [url])

        return [response, loading, hasError]


    }

    if (hasError) {
        return <div>No user to display</div>
    }
    if (loading) {
        return <div>Loading...</div>
    }
    return (
        <div className="hero">
            <Banner firstName={user.firstName} />
            <MainInfo
                activitySessions={user.metadatas.sessions.activitySessions}
                averageSessions={user.metadatas.sessions.averageSessions}
                skillData={user.metadatas.skillData}
                skillKind={user.metadatas.skillKind}
                score={user.metadatas.todayScore}
            />
            <NutritionInfo keyData={user.metadatas.keyData} />
        </div>
    )
}

export default Hero