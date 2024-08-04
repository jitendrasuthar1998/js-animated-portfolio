import React from 'react'

const Navbar = () => {
  return (
    <nav className="container nav_bar">
      <div className="left logo">Portfolio</div>

      <div className="right">
        <a href="" className="nav_items">Home</a>
        <a href="" className="nav_items">Experience</a>
        <a href="" className="nav_items">Skills</a>
        <a href="" className="nav_items">Project</a>
        <a href="" className="nav_items">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar