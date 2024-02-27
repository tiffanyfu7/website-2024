import React, { useCallback, useState, useRef } from 'react'
import { TerminalConstants, TerminalHeader, termImg } from '../Contents'
import Bar from './Bar';
import Draggable from 'react-draggable';

export const Terminal = () => {
  const icon = termImg;

  const [open, setOpen] = useState(true);

  const wrapperOpen = useCallback(val => {
    setOpen(val);
  }, [setOpen]);

  const nodeRef = useRef(null);

  return (
  <>
    <div className="app-icons">
      <div className = "icon">
        <button onClick={() => setOpen(true)} style={{ background: "none", outline: "none", border: "none", padding: "0", margin: "0"}}>
          <img src={icon} height={"50px"} />
        </button>
        <p>Terminal</p>
      </div>
    </div>    
      
    <div>
      <Draggable nodeRef={nodeRef}> 
        <div ref={nodeRef}>
          {open &&
            <div id="terminal" className = "window">
              <Bar setParent={wrapperOpen} title="TFHUB Terminal"/>
              <div id="terminal-contents">
                <TerminalHeader />
                <TerminalConstants />
              </div>
            </div>}
        </div>    
      </Draggable>
    </div>
  </>
  )
}

export default Terminal