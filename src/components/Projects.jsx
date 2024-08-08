import React from 'react'
import projets from "../data/projects.json";

const Projects = () => {
  return (
    <div className='container projects my-3'>
      <h1>Projects</h1>
      <div className='row d-flex align-items-center justify-content-center gap-5'>
        {
          projets.map((project) =>
            <div key={project.title} className='col-sm-6 col-md-4 col-lg-3 card bg-dark text-light' style={{ border: "1px solid yellow", borderRadius: "10px", width: "18rem", boxShadow: "var(--box-shadow)" }} >
              <div className='img d-flex align-items-center justify-content-center p-3'>
                <img className="card-img-top" src={project.imageSrc} alt={project.title} style={{ height: "200px", width: "250px", border: "2px solid yellow", borderRadius: "10px" }} />
              </div>
              <div className="card-body text-center bg-dark">
                <h5 className="card-title">{project.title}</h5>
                <p className="card-text">{project.description}</p>
                <a href={project.demo} className="btn btn-primary mx-3">Demo</a>
                <a href={project.source} className="btn btn-warning">Source</a>
              </div>
            </div>
          )
        }
      </div>

    </div>
  )
}

export default Projects