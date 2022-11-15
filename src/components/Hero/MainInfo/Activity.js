

import '../../../styles/Hero/MainInfo/Activity.css'
import DayActivity from './DayActivity'
import { useEffect } from 'react'


function Activity(props) {

    const data = props.data
    const sessions = data.USER_ACTIVITY[0].sessions
    console.log(sessions)


    useEffect(() => {
        let highestWeight = 0
        let lowestWeight = 0
        let middleWeight = 0
        let weightArray = [sessions.map((index) => (index.kilogram))]
        console.log(weightArray)

        highestWeight = Math.max(...weightArray[0])
        lowestWeight = Math.min(...weightArray[0])
        middleWeight = lowestWeight + ((highestWeight - lowestWeight) / 2)


        console.log(weightArray)
        console.log(highestWeight)
        console.log(lowestWeight)
        console.log(middleWeight)

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
        <div className="activity">{sessions.map((index) => (
            <DayActivity data={data} day={index.day} kilogram={index.kilogram} calories={index.calories} key={`${index}-${index.day}`} />
        ))}</div>
    )

}

export default Activity