

import '../../../styles/Hero/MainInfo/Skills.css'
import Skill from './Skill'


function Skills(props) {

    const skillData = props.skillData
    const skillKind = props.skillKind

    return (
        <div className="skills">{skillData.map((index) => (
            <Skill
                value={index.value}
                kind={index.kind}
                key={`${index}-${index.value}-${index.kind}`}
                skillKind={skillKind}
            />
        ))}</div>
    )

}

export default Skills