import { GET_TOPIC } from "../actionTypes/gameAT";


export function getGameAC (data){
    return{
      type: GET_TOPIC,
      payload: data,
    }
  }