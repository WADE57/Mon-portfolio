import Navigation from './components/Navigation'
import LanguageToggle from './components/LanguageToggle'
import Hero from './sections/Hero'
import About from './sections/About'
import Education from './sections/Education'
import Skills from './sections/Skills'
import SoftSkills from './sections/SoftSkills'
import Languages from './sections/Languages'
import Projects from './sections/Projects'
import Contact from './sections/Contact'
import Footer from './components/Footer'
import './App.css'

function App() {
  return (
    <div className="App">
      <Navigation />
      <LanguageToggle />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <SoftSkills />
      <Languages />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
