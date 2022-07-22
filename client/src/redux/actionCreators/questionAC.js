import { GET_QUEST } from "../actionTypes/gameAT";


export function getQuestionAC (answerPoint){
    return{
      type: GET_QUEST,
      payload: answerPoint,
    }
  }