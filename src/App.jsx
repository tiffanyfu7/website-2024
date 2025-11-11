import './App.css'
import Contact from './components/Contact'
import Film from './components/Film';
import MediaApps from './components/MediaApps'
import Projects from './components/Project/Projects';
import Terminal from './components/Terminal'

function App() {
  const handleWindowClick = (id) => {
    setActiveWindowId(id);
  };

  return (
    <>
      <div id="desktop">
        <MediaApps />
        <Contact handleClick={handleWindowClick} />
        <Projects handleClick={handleWindowClick} />
        <Film handleClick={handleWindowClick} />
        <Terminal handleClick={handleWindowClick} />
      </div>

      <div id="phone">
        <div style={{backgroundColor:"black"}}>
          <MediaApps />
        </div>
      </div>
    </>
  )
}

export default App