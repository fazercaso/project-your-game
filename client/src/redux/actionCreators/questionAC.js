import { GET_QUEST } from "../actionTypes/gameAT";


export function getQuestionAC (data){
    return{
      type: GET_QUEST,
      payload: data,
    }
  }