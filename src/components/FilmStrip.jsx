import React, { useState, useRef, useCallback } from "react";
import Bar from "./Bar";
import Draggable from "react-draggable";
import { filmImg, films } from "../Contents";
import "../styling/FilmStrip.css";

export const FilmStrip = ({ handleClick, style }) => {
  const icon = filmImg;

  const [open, setOpen] = useState(true);

  const wrapperOpen = useCallback(
    (val) => {
      setOpen(val);
    },
    [setOpen],
  );

  const nodeRef = useRef(null);

  return (
    <>
      <div className="app-icons">
        <div className="icon">
          <button
            onClick={() => setOpen(true)}
            style={{
              background: "none",
              outline: "none",
              border: "none",
              padding: "0",
            }}
          >
            <img src={icon} height={"50px"} />
          </button>
          <p>FilmStrip</p>
        </div>
      </div>

      <div>
        <Draggable nodeRef={nodeRef}>
          <div ref={nodeRef}>
            {open && (
              <div
                id="film-strip-window"
                className="window"
                onClick={() => handleClick("film-strip-window")}
                style={style}
              >
                <Bar setParent={wrapperOpen} title="Film Strip" />
                <div className="film-strip-container">
                  {films.map((film) => {
                    return (
                      <div className="strip-item" key={film.title}>
                        <div className="strip-holes" />
                        <div className="film-box-container">
                          <div className="film-box">
                            <h4>{film.title}</h4>
                            <p>{film.role}</p>
                            <h5>{film.date}</h5>
                          </div>
                        </div>
                        <div className="strip-holes" />
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </Draggable>
      </div>
    </>
  );
};

export default FilmStrip;
