import { GET_SCORE } from "../actionTypes/gameAT";



export function getScoreAC (data){
    return{
      type: GET_SCORE,
      payload: data,
    }
  }