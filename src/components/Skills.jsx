import React from 'react'
import skills from '../data/skills.js'

const Skills = () => {
  return (
    <div className='container skills'>
      <h1>Skills</h1>
      <div className='text-center d-flex align-items-center flex-row items gap-5 flex-wrap justify-content-center'>
        {
          skills.map((skill) =>
            <div className='item' key={skill.title}>
              <img src={skill.imageSrc} alt={skill.title} />
              <h3>{skill.title}</h3>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Skills