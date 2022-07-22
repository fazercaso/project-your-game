import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Button,  ButtonGroup } from '@geist-ui/core'

function NavBar() {
    const {user} = useSelector(state=> state.user)
    return (
        <div>
        {user.id 
        ? 
        <>
            <ButtonGroup justify="center" type="warning" ghost>
            <Button><Link to="/home">Игра</Link></Button>
            <Button><Link to="/profile">Профиль</Link></Button >
            <Button><Link to="/signout">Выйти</Link></Button >
            </ButtonGroup >
        </>
        :
        <>
            <ButtonGroup justify="center" type="warning" ghost>
            <Button><Link to="/signin">Логин-Гогин</Link></Button>
            <Button><Link to="/signup">Рега</Link></Button >
            </ButtonGroup >
        </>
        }
        </div>

        // <ButtonGroup justify="center" type="warning" ghost>
        //     <Button><Link to="/sign/in">Login </Link></Button>
        //     <Button><Link to="/sign/up">Info</Link></Button >
        //     <Button><Link to="/restorans">Restorans</Link></Button >
        // </ButtonGroup >

    );
}

export default NavBar;
