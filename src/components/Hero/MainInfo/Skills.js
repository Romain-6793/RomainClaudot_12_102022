

import '../../../styles/Hero/MainInfo/Skills.css'
import Skill from './Skill'


function Skills(props) {

    const data = props.data
    const skilldata = data.USER_PERFORMANCE[0].data



    return (
        <div className="skills">{skilldata.map((index) => (
            <Skill data={data}
                value={index.value}
                kind={index.kind}
                key={`${index}-${index.value}-${index.kind}`} />
        ))}</div>
    )

}

export default Skills