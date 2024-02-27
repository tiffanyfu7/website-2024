import React, { useEffect, useRef, useState } from 'react'

function Bar({setParent, title}) {
    const [openState, setOpenState] = useState(true);

    useEffect(() => {
        setParent(openState);
    }, [setParent, openState]);

    const handleClose = () => {
        setOpenState(false);
    };

    return (
        <div className="bar">
            <button onClick={handleClose} className="close-button"> </button>
            <p style={{marginLeft: "40%", marginTop: "8px"}}>{title}</p>
        </div>
    )
}

export default Bar