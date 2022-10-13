// src/components/main/TechList

import React from 'react'

const TechList = ({techs}) => {
    console.log(techs)
    const techsFormatted = techs.map((tech) => <li key={tech}>{tech}</li>)
    return techsFormatted
}

export default TechList