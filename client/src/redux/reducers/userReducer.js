import { SET_USER } from "../actionTypes/userAT";

const userReduser = (state = { user:[] }, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, user: action.payload };

    default:
      return state;
  }
}

export default userReduser;
