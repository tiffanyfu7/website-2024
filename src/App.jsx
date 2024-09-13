import './App.css'
import Contact from './components/Contact'
import MediaApps from './components/MediaApps'
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