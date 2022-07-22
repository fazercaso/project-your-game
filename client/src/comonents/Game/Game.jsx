import React, { useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { getGameAC } from '../../redux/actionCreators/gameAC';
import { ButtonGroup, Button, Text } from '@geist-ui/core';
import { useNavigate } from 'react-router-dom';
// import { Link } from 'react-router-dom';
import style from './game.module.css'

function Game() {
    const {games} =useSelector((state)=> state.game);
    // console.log(games);
    // console.log(games);
    const navigate = useNavigate();
    const dispatch= useDispatch()
    useEffect(()=>{
        fetch('/game',{
            method: 'GET',
            headers: {
                "Content-Type": "application/json",
              },
            credentials: 'include',
          })
          .then(response =>response.json())
        //   .then(data => console.log(data));
          .then(data=>dispatch(getGameAC(data))); 
    }, [dispatch])
    const question =(id) =>{
        navigate(`/game/question/${id}`)
    }
    return (

        <div className={style.select}>
            {games.map((el)=>(
                <>
                <ButtonGroup type="warning" ghost>
                <Text b i style={{ letterSpacing: '0.6px', width : '200px' }} key={el.id}>{el.title}</Text>
                {/* <h2 key={el.id}>{el.title}</h2> */}
                {el.Questions.map((tem)=> 
                <Button key={tem.id} onClick={()=> question(tem.id)}>{tem.question_point}</Button>)}
                    </ButtonGroup>
                    </>
            ))}
            
        </div>
    );
}

export default Game;