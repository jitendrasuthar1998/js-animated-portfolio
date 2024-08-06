import React from 'react'
import experienceData from "../data/experience";

const Experience = () => {
  return (
    <div className='container ex'>
      <h1>Experience</h1>

      <div className='text-center d-flex align-items-center flex-column'>
        {experienceData.map((data) => {
          return <div key={data.id} className='d-flex flex-row align-items-center justify-content-between ex-items my-5'>
            <div className='left'>
              <img src={data.imageSrc} alt={data.id} />
            </div>
            <div className='right '>
              <h2>{data.role}</h2>
              <h4><span style={{color:"yellowgreen"}}>{data.startDate}{" "}{data.endDate}</span>{" "}
              <span style={{color:"yellow"}}>{data.location}</span>
              </h4>
              {data.experiences.map((item) => <h5 style={{color:"yellow"}}>{item}</h5>)}
            </div>

          </div>
        })}
      </div>
    </div>
  )
}

export default Experience