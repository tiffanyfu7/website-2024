import React, { useState, useRef, useCallback } from "react";
import Bar from "./Bar";
import Draggable from "react-draggable";
import { filmImg, films } from "../Contents";
import "../styling/FilmStrip.css";
import { CardMedia } from "@mui/material";

export const Filmography = ({ handleClick, style }) => {
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
          <p>Filmography</p>
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
                <Bar setParent={wrapperOpen} title="Filmography" />
                <div className="film-strip-container">
                  {films.map((film) => (
                    <div className="strip-item" key={film.title}>
                      <div className="strip-holes" />

                      <div className="film-box-container">
                        <a
                          href={film.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <div className="film-box">
                            <CardMedia
                              component="img"
                              image={film.image}
                              alt={film.title}
                              className="film-image"
                            />

                            <div className="film-overlay">
                              <h3>{film.title}</h3>
                              <h5>{film.date}</h5>
                              <p>{film.role}</p>
                            </div>
                          </div>
                        </a>
                      </div>

                      <div className="strip-holes" />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </Draggable>
      </div>
    </>
  );
};

export default Filmography;
