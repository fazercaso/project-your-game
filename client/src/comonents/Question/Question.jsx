import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Spacer,Input, Button, Text } from '@geist-ui/core';
import {  Meh } from '@geist-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestionAC } from '../../redux/actionCreators/questionAC';

function Question() {
    const {question} =useSelector((state)=> state.game);
    const { id } = useParams();
    const navigate = useNavigate();
    const dispatch= useDispatch()
    // console.log(question);
    useEffect(()=>{
        fetch('/game/question',{
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                id
              }),
            credentials: 'include',
          })
          .then(response =>response.json())
        //   .then(data => console.log(data));
          .then(data=>dispatch(getQuestionAC(data))); 

    }, [dispatch])
     
    const Chekansw = (e) => {
        e.preventDefault();
        console.log(e.target.answer.value);
        console.log(question.answer_text);
        if (e.target.answer.value === question.answer_text ) 
        // dispatch({
        //   type: 'EDIT',
        //   payload: {
        //     id: findrest.id, url: e.target.url.value, title: e.target.title.value, description: e.target.description.value, address: e.target.address.value,
        //   },
        // });
        navigate(-1);
      };

    // const findques = state.rest.find((rest) => rest.id === +id);
    // console.log(findques);
    return (
        <div>
            <Button  type="warning" ghost  onClick={()=> navigate(-1)}>Назад</Button>
            <Text blockquote my={0}>
                {question.question_text}
            <form onSubmit={Chekansw}>
              <Input width='100%' placeholder='Введите ответ' name ='answer' type="warning"/>
              <br/>
              <Button icon={< Meh />} htmlType="submit" scale={0.85} type="warning" ghost >Answer</Button>
                <Spacer h={0.5} />
            </form>
            </Text>
        </div>
    );
}

export default Question;