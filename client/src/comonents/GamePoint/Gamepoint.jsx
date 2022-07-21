import React from 'react';
import { ButtonGroup, Button } from '@geist-ui/core';
import { Link } from 'react-router-dom';

function Gamepoint() {
    return (
        <div>
            <ButtonGroup type="warning" ghost>
            <Button><Link to="/question/">{} </Link></Button>
            </ButtonGroup>
        </div>
    );
}

export default Gamepoint;