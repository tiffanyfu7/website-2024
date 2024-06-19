import './App.css'
import Contact from './components/Contact'
import MediaApps from './components/MediaApps'
import Terminal from './components/Terminal'
import { Projects } from './components/projects/Projects'

function App() {
  return (
    <>
      <MediaApps />
      <Contact />
      <Projects />
      <Terminal />
    </>
  )
}

export default App