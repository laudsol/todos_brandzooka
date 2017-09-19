import axios from 'axios';
export const SET_ACCESS_TOKEN = 'SET_ACCESS_TOKEN';
export const SET_USER = 'SET_USER';

export const setUser = user => ({
  type: SET_USER,
  user
});

export const setAccessToken = token => ({
  type: SET_ACCESS_TOKEN,
  token
});

export default function reducer (state = {
  token: null,
}, action){
  switch(action.type){
    case SET_ACCESS_TOKEN:
      return {
        ...state,
        token: action.token
      };
    case SET_USER:
      return {
        ...state,
        user: action.user
      };
    default:
      return state;
  }
}
