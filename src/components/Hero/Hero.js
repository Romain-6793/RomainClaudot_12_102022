
import '../../styles/Hero/Hero.css'

import Banner from './Banner'
import MainInfo from './MainInfo/MainInfo'
import NutritionInfo from './NutritionInfo/NutritionInfo'
import { useParams } from 'react-router-dom'
import React, { useState } from 'react'
import useFetch from '../../useFetch'

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
    const { response, newUser, loading, hasError } = useFetch(BASE_URL, URLS)

    const [user] = useState({
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
        },

    }
    )

    if (hasError) {
        return <div className="info-div">NO USER TO DISPLAY !</div>
    }
    if (loading) {
        return <div className="info-div">LOADING...</div>
    }
    return response !== null ? (
        <div className="hero">
            <Banner firstName={newUser.firstName} />
            <MainInfo
                activitySessions={newUser.metadatas.sessions.activitySessions}
                averageSessions={newUser.metadatas.sessions.averageSessions}
                skillData={newUser.metadatas.skillData}
                score={newUser.metadatas.todayScore}
            />
            <NutritionInfo keyData={user.metadatas.keyData} />
        </div>
    ) : (
        <div className="hero">
            <Banner firstName={user.firstName} />
            <MainInfo
                activitySessions={user.metadatas.sessions.activitySessions}
                averageSessions={user.metadatas.sessions.averageSessions}
                skillData={user.metadatas.skillData}
                score={user.metadatas.todayScore}
            />
            <NutritionInfo keyData={user.metadatas.keyData} />
        </div>
    )

}

export default Hero