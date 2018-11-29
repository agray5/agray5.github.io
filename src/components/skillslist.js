import React from 'react'
import PropTypes from 'prop-types'
import { FaBeer } from 'react-icons/fa';


const SkillList = (props) => (
    <ul id="skillList">
        {
            props.skillNames.map((skill, index) => {
                return <li key={index}><FaBeer/></li>
            })
        }
    </ul>
)

export default SkillList

SkillList.prototype = {
    skilNames: PropTypes.array.isRequired
}