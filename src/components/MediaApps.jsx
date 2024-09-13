import React from 'react'
import { mediaIcons } from '../Contents'

const MediaApps = () => {
    const apps = mediaIcons
    
    return (
        <div id = "media-icons">
            {apps.map((icon, i) => {
                return (
                    <div className="icon" key={i}>
                        <a href={icon.url} target="_blank">
                            <img src={icon.imgPath} alt={icon.imgAlt} style={{ height: "50px" }} />
                        </a>
                        <p style={{ marginTop: "2px" }}>{icon.title}</p>
                    </div>)
            })}
        </div>
    )
}

export default MediaApps