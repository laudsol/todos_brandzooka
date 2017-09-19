let nextTodoId = 0
export const addTodo = (text) => {
  return {
    type: 'ADD_TODO',
    id: nextTodoId++,
    text
  }
}

export const setVisibilityFilter = (filter) => {
  return {
    type: 'SET_VISIBILITY_FILTER',
    filter
  }
}

export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id
  }
}

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id
  }
}

export const facebookUserData = (responseFacebook) => {
  console.log(responseFacebook);
  return {
    type: 'FACEBOOK_USER_DATA',
    responseFacebook
  }
}

// export const setAccessToken = (token) => {
//   return {
//     type: 'SET_ACCESS_TOKEN',
//     token
//   }
// };


const FB = window.FB;

const login = (dispatch) => {
  FB.login(function(response){
    dispatch(setAccessToken(response, access_token));
    dispatch(fetchUserInformation());
  }, {scope:'public_profile , publish_actions'});
}

export const setAccessToken = (token) => {
  return {
    type: 'SET_ACCESS_TOKEN',
    token
  }
};

const fetchUserInformation = token => {
  this.setState({
    isFetchingUser: true
  })
  axios
    .post('example/login',{
      token: token
    })
    .then(response => {
      this.setState({
        isFetchingUser: false
      });
      this.props.setUser(reponse.data.user)
    });
}

export const setUser = (user) => {
  return {
    type: 'SET_USER',
    user
  }
};
