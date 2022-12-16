
import '../../styles/Hero/Hero.css'

import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import useFetchMultiple from '../../useFetchMultiple'
import Banner from './Banner'
import MainInfo from './MainInfo/MainInfo'
import NutritionInfo from './NutritionInfo/NutritionInfo'
import Model from '../../Model'


/**
 * 
 * @returns the whole organization of the page main content, depending on the response given by useFetch
 */

function Hero() {

    const { id = 12 } = useParams()

    const firstUser = {
        firstName: "Karl",
        id: 12,
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

    const [user, setUser] = useState(firstUser)

    const BASE_URL = `http://localhost:3000/user/${id}`
    const URLS = [
        BASE_URL,
        `${BASE_URL}/activity`,
        `${BASE_URL}/average-sessions`,
        `${BASE_URL}/performance`,
    ]
    // eslint-disable-next-line no-unused-vars
    const { response, loading, hasError } = useFetchMultiple(BASE_URL, URLS)

    /**
     * Conditional render depending on response, loading and error
     */
    const _buildUser = (response) => {
        return {
            firstName: response[0].data.userInfos.firstName,
            id: response[0].data.id,
            metadatas: {
                sessions: {
                    activitySessions: response[1].data.sessions,
                    averageSessions: response[2].data.sessions,
                },
                skillData: response[3].data.data,
                todayScore: response[0].data.todayScore || response[0].data.score,
                keyData: response[0].data.keyData
            },
        }
    }

    useEffect(() => {
        if (response
        ) {
            const user = _buildUser(response);
            setUser(user);
        }
    }, [response])



    /** Here are our model classes, used to format data the right way. Classes and new user are imported
     * from different files.
     */

    const modelUser = new Model(user)
    const finalUser = modelUser.user

    if (hasError) {
        return <div className="info-div">NO USER TO DISPLAY !</div>
    }
    if (loading) {
        return <div className="info-div">LOADING...</div>
    }
    return (
        <div className="hero">
            <Banner firstName={finalUser.firstName} />
            <MainInfo
                activitySessions={finalUser.activitySessions}
                averageSessions={finalUser.averageSessions}
                skillData={finalUser.skillData}
                score={finalUser.todayScore}
            />
            <NutritionInfo keyData={finalUser.keyData} />
        </div>
    )

}

export default Hero

