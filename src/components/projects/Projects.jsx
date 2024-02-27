import React, { useCallback, useState, useRef } from 'react'
import Bar from '../Bar';
import { PastProjects } from './PastProjects';
import { CurrentProjects } from './CurrentProjects';
import Draggable from 'react-draggable';
import { projImg } from '../../Contents';

export const Projects = () => {
  const icon = projImg;

  const [open, setOpen] = useState(true);

  const wrapperOpen = useCallback(val => {
    setOpen(val);
  }, [setOpen]);

  const nodeRef = useRef(null);
  
  return (
  <>
    <div className = "app-icons">
      <div className="icon">
        <button onClick={() => setOpen(true)} style={{ background: "none", outline: "none", border: "none", padding: "0"}}>
          <img src={icon} height={"40px"} />
        </button>
        <p>Projects</p>
      </div>
    </div>  
    <div>
      <Draggable nodeRef={nodeRef}> 
        <div ref={nodeRef}>
          {open &&
            <div id="projects" className = "window">
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
  </>
  )
}

export default Projects