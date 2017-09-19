import React from 'react'
import axios from 'axios';
import { connect } from 'react-redux'
import {setAccessToken, setUser} from '../actions'
import '../components/App.css';

const FacebookLogin = (state, ownProps) => {

  // state = {
  //   isFetchingUser: false
  // }

  render(){
    let{token, user} = this.ownProps;
    let{ isFetchingUser} = this.state;
    return (
      <div>
        {!token &&
          <div>Click here to login</div>
        }
        {isFetchingUser && <div>loading...</div>}
        {token && user &&
          <div>Welcome back {user.name} </div>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  token: state.app.token,
  user: state.app.user
});

const mapDispatchToProps = dispatch => ({
  setAccessToken: token => dispatch(setAccessToken(token)),
  setUser: user => dispatch(setUser(user))
});

export default(mapStateToProps,mapDispatchToProps)(App);
