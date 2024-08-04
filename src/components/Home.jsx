import resume from "../pdf/Jitendra Suthar Resume.pdf"
import hero from "../images/hero/hero.avif"

const Home = () => {
  return (
    <div className="container home">
      <div className="left">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, commodi!</h1>
        <a className="btn btn-outline-warning" href={resume} download="jitendra-suthar-resume.pdf">Download Resume</a>
      </div>
      <div className="right">
    <div className="img">
    <img src={hero} alt="hero"/>
    </div>
      </div>
    </div>
  )
}

export default Home