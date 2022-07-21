import React from 'react';
import { Button, Link, ButtonGroup } from '@geist-ui/core'

function NavBar() {
    return (

        <ButtonGroup type="warning" ghost>
            <Button><Link to="/login">Login </Link></Button>
            <Button><Link to="/info">Info</Link></Button >
            <Button><Link to="/restorans">Restorans</Link></Button >
        </ButtonGroup >

    );
}

export default NavBar;