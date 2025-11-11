import React, { useState, useRef, useCallback } from 'react'
import Bar from './Bar';
import Draggable from 'react-draggable';
import { mailImg } from '../Contents';

export const Contact = ({ handleClick, style }) => {
  const icon = mailImg;

  const [open, setOpen] = useState(true);

  const wrapperOpen = useCallback(val => {
    setOpen(val);
  }, [setOpen]);
    
  const nodeRef = useRef(null);

  return (
  <>
    <div className="app-icons">
      <div className = "icon">
        <button onClick={() => setOpen(true)} style={{ background: "none", outline: "none", border: "none", padding: "0"}}>
          <img src={icon} height={"50px"} />
        </button>
        <p>Contact</p>  
      </div>
    </div>    
      
    <div>
      <Draggable nodeRef={nodeRef}> 
        <div ref={nodeRef} >
          {open &&
            <div id="contact-window" className="window" onClick={() => handleClick("contact-window")} style={style}>
                <Bar setParent={wrapperOpen} title="Contact"/>
                <div id="contact-contents">
                  <h2>Let's Connect!</h2> 
                  <p><a href="mailto:tiffany.fu7@gmail.com">tiffany.fu7@gmail.com</a> </p>                 
                  <img src="./assets/images/me.png" alt="a selfie" id="selfie"/>
                </div>
            </div>}
        </div>    
      </Draggable>
    </div>
  </>
  )
}

export default Contact