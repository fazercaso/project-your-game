import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Spacer,Input, Button, Text } from '@geist-ui/core';
import {  Meh, SkipBack } from '@geist-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { getQuestionAC } from '../../redux/actionCreators/questionAC';
import { getScoreAC } from '../../redux/actionCreators/scoreAC';

function Question() {
    const {question} =useSelector((state)=> state.game);
    const [start, setSart] = useState(false);
    const [points, setPoints] = useState(true);

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
        setSart(!start)
        e.preventDefault();
        // console.log(e.target.answer.value);
        // console.log(question.answer_text);
        // console.log(question.question_point);
        // dispatch(getQuestionAC(answerPoint))
        // let answerPoint =  points ? question.question_point : -question.question_point
         if (e.target.answer.value === question.answer_text ){
            setPoints(true);
            let answerPoint = question.question_point
            // console.log(answerPoint);
            // console.log(points);
            dispatch(getScoreAC(answerPoint))
        } else {
            setPoints(false);
            let answerPoint = -question.question_point
            // console.log(answerPoint);
            // console.log(points);
            dispatch(getScoreAC(answerPoint))
        }
        // console.log(answerPoint);
            // fetch('/game/points',{
            //     method: 'POST',
            //     headers: {
            //         "Content-Type": "application/json",
            //       },
            //       body: JSON.stringify({
            //         state: points,
            //         score : question.question_point,
            //         user_id: 1 
            //       }),
            //     credentials: 'include',
            //   })
            //   .then(response =>response.json())
            //   .then(data => console.log(data));
            //   .then(data=>dispatch(getQuestionAC(data))); 
    
        }



        // if (e.target.answer.value === question.answer_text ){
        //     setSart(!start)
        // } 

        // setSart(!start)
        // navigate(-1);

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
                {start ? 
                (points ? <> 
                <Text scale={1.25} mb={0} style={{ color: '#289453'}} blockquote b>Правильный ответ</Text>
                <Button  onClick={()=> navigate(-1)} htmlType="button" scale={0.85} type="warning" ghost >Следующий вопрос</Button>
                <Spacer h={0.8} />
                </> : <>   <Text scale={1.25} mb={0} style={{ color: '#f50707'}} blockquote b>Не правильный ответ</Text>
                <Text scale={1.25} mb={0} style={{ color: '#289453'}} blockquote b>Правильный ответ : {question.answer_text}</Text>
                <Button onClick={()=> navigate(-1)} htmlType="button" scale={0.85} type="warning" ghost >Следующий вопрос</Button>
                <Spacer h={0.8} /></>) : (<></>)}
            </form>
            </Text>
        </div>
    );
}

export default Question;