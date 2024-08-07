import './App.css'
import Home from "./components/Home"
import Navbar from "./components/Navbar"
import Experience from "./components/Experience";
import Skills from './components/Skills';

function App() {

  return (
    <div>
      <Navbar/>
      <Home/>
      <Experience/>
      <Skills/>
    </div>
  )
}

export default App
