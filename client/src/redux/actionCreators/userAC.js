import { SET_USER } from "../actionTypes/userAT";

export function setUserAC (data) {
  return {
    type: SET_USER,
    payload: data.user,
  }
}
