import React from 'react'
import axios from 'axios';
import thunk from 'redux-thunk';
import { connect } from 'react-redux'
import {setAccessToken, setUser} from '../actions'
import '../components/App.css';

let FacebookLogin = (state) => {

  // state = {
  //   isFetchingUser: false
  // }

  // let{token, user} = this.ownProps;
  // let{isFetchingUser} = this.state;
  return (
    <button>
      {/* {JSON.stringify(state)} */} 
      {!state.token &&
        <div>Click here to login</div>
      }
      {/* {isFetchingUser && <div>loading...</div>} */}
      {state.token && state.user &&
        <div>Welcome back {state.user} </div>
      }
    </button>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.setFacebookUser.token,
    user: state.setFacebookUser.user
  }
}

const mapDispatchToProps = dispatch => ({
  setAccessToken: token => dispatch(setAccessToken(token)),
  setUser: user => dispatch(setUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(FacebookLogin)

 // FacebookLogin
