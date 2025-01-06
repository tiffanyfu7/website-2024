import React, { useCallback, useState, useRef } from 'react'
import Bar from '../Bar';
import { PastProjects } from './PastProjects';
import { CurrentProjects } from './CurrentProjects';
import Draggable from 'react-draggable';
import { projImg } from '../../Contents';

export const Projects = ({ handleClick, style }) => {
  const icon = projImg;

  const [openWindow, setOpenWindow] = useState(true);

  const wrapperOpen = useCallback(val => {
    setOpenWindow(val);
  }, [setOpenWindow]);

  const nodeRef = useRef(null);

  return (
  <div>
    <div className = "app-icons">
      <div className="icon">
        <button onClick={() => setOpenWindow(true)} style={{ background: "none", outline: "none", border: "none", padding: "0"}}>
          <img src={icon} height={"40px"} />
        </button>
        <p>Projects</p>
      </div>
    </div>  
    <div  style={style}>
      <Draggable nodeRef={nodeRef}> 
        <div ref={nodeRef} style={style}>
          {openWindow &&
            <div id="projects-window" className="window" onClick={() => handleClick("projects-window")}>
              <Bar setParent={wrapperOpen} title="Projects"/>
              <div id="project-contents">
                  <PastProjects />              
                  <CurrentProjects />
              </div>
            </div>
          }
        </div>   
      </Draggable >
    </div>
  </div>
  )
}

export default Projects