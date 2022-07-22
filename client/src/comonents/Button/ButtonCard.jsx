import React, { useState } from 'react';
import { Button } from '@geist-ui/core';
import { useNavigate } from 'react-router-dom';

function ButtonCard({tem}) {
    const [state,setState]=useState(true)
    const navigate = useNavigate()
    const question =() => {
    setState(false)
    console.log(state);
        navigate(`/game/question/${tem.id}`);
        // dispatch(getButtonAC({id, statusButton}))
       

    }
    return (
        <>
        {state ? 
        <Button onClick={question}>{tem.question_point}</Button>
    : <p>7</p>
    }
        </>
        
        
    );
}

export default ButtonCard;