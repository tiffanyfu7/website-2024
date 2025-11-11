import React, { useState, useRef, useCallback } from 'react'
import Bar from './Bar';
import Draggable from 'react-draggable';
import { filmImg } from '../Contents';

export const Film = ({ handleClick, style }) => {
  const icon = filmImg;

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
        <p>Film</p> 
      </div>
    </div>    
      
    <div>
      <Draggable nodeRef={nodeRef}> 
        <div ref={nodeRef} >
          {open &&
            <div id="film-window" className="window" onClick={() => handleClick("film-window")} style={style}>
                <Bar setParent={wrapperOpen} title="Film"/>
                <div id="film-contents">
                    <h4>Mere Interference (Oct 25 - Pr)</h4>
                    <p class="role-text">Screenwriter</p>            
                    <h4><a href="https://youtube.com/playlist?list=PLjtBHPqnsLEysQU-vPrykwHz9WDeGeUhg&si=_NTZqpFGdMkoq3ig" target="_blank">Digital Postcard</a> (Aug 22 - Pr)</h4>
                    <p class="role-text">Editor + Camera + Producer</p>               
                    <h4>I'm Sorry for Your Loss (Oct 25)</h4>
                    <p class="role-text">Editor</p>            
                    <h4><a href="https://www.youtube.com/watch?v=bKirfxMeYf4" target="_blank">Montage</a> (Apr - May 25): Editor</h4>
                    <p class="role-text">Editor</p>               
                </div>
            </div>}
        </div>    
      </Draggable>
    </div>
  </>
  )
}

export default Film