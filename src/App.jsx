import { useState } from 'react'
import './App.css'
import Contact from './components/Contact'
import MediaApps from './components/MediaApps'
import Terminal from './components/Terminal'
import { Projects } from './components/projects/Projects'

function App() {
  const [activeWindowId, setActiveWindowId] = useState(null);

  const handleWindowClick = (id) => {
    setActiveWindowId(id);
  };

  const getWindowStyle = (id) => {
    return {
      zIndex: activeWindowId === id ? 1000 : 1,
    }
  };

  return (
    <div id="desktop">
      <MediaApps />
      <Contact handleClick={handleWindowClick} style={getWindowStyle("contact-window")} />
      <Projects handleClick={handleWindowClick} style={getWindowStyle("projects-window")} />
      <Terminal handleClick={handleWindowClick} style={getWindowStyle("terminal-window")} />
    </div>
  )
}

export default App