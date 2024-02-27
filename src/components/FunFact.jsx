import { Button } from '@mui/material';
import React, { useState } from 'react'
import { factsList } from '../Contents';

//put this in a footer with helpful links on the side
export const FunFact = () => {
    const [fact, setFact] = useState("");
    const facts = factsList

    const handleSubmit = () => {
        setFact(facts[Math.floor(Math.random() * facts.length)]);
    }

    return (
        <>
            <p>Want a Fun Fact?</p>
            <Button onClick={() => handleSubmit()}>Yes!</Button>
            {fact}
        </>
    )
}