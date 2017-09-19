const setFacebookUser = (state = {token: 12345, user: 'me'}, action) => {
  switch(action.type){
    case 'SET_ACCESS_TOKEN':
    return {
      ...state,
      token: action.token
    };
    case 'SET_USER':
    return {
      ...state,
      user: action.user
    };
    default:
      return state;
  }
  // return state;
}

export default setFacebookUser
