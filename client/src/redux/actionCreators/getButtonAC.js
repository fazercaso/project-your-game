import { GET_BUTTON } from "../actionTypes/gameAT";


export function getButtonAC (data){
    return{
      type: GET_BUTTON,
      payload: data,
    }
  }