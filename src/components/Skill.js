
import { useEffect, useRef } from 'react'



function Skill(props) {


    const data = props.data
    const skillkind = data.USER_PERFORMANCE[0].kind
    console.log(skillkind)
    let value = useRef(skillkind[props.kind])

    useEffect(() => {

        if (value.current === 'cardio') {
            value.current = 'Cardio'
        }
        if (value.current === 'energy') {
            value.current = 'Energie'
        }
        if (value.current === 'endurance') {
            value.current = 'Endurance'
        }
        if (value.current === 'strength') {
            value.current = 'Force'
        }
        if (value.current === 'speed') {
            value.current = 'Vitesse'
        }
        if (value.current === 'intensity') {
            value.current = 'Intensité'
        }


        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])




    return (
        <ul>
            <li> {value.current} : {props.value}</li>
        </ul>
    )

}

export default Skill