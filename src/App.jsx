import './App.css'
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Experience from "./components/Experience";
import Skills from './components/Skills';
import Projects from './components/Projects';

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <Experience/>
      <Skills/>
      <Projects/>
    </div>
  )
}

export default App
