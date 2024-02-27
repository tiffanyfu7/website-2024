import React, { useState, useRef, useCallback } from 'react'
import Bar from './Bar';
import Draggable from 'react-draggable';
import { mailImg } from '../Contents';

export const Contact = () => {
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
        <div ref={nodeRef}>
          {open &&
            <div id="contact" className = "window">
                <Bar setParent={wrapperOpen} title="Contact"/>
                <div id="contact-contents">
                    <h1>Let's Connect!</h1>  
                    <p>Email Me at <a href="mailto:tiffany.fu7@gmail.com">tiffany.fu7@gmail.com</a> </p>                 
                    <p>Feel free to take a look at my Resume</p>
                    <p>And follow me at my other socials</p>
                    <p>Reach out with any fun opportunities!</p>
                    {/* <a>Learn more about how I built this</a> */}
                </div>
            </div>}
        </div>    
      </Draggable>
    </div>
  </>
  )
}

export default Contact