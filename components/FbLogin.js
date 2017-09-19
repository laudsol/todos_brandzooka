import React from 'react'
import axios from 'axios';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {setAccessToken, setUser} from '../reducers/fblogin'

const FB = window.FB;

class FacebookLogin extends Component {

  state = {
    isFetchingUser: false
  }

  login = () => {
    FB.login(function(response){
      this.props.setAccessToken(response, access_token);
      this.props.fetchUserInformation();
    }, {scope:'public_profile , publish_actions'});
  }

  fetchUserInformation = token => {
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

  render(){
    let{token, user} = this.props;
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

export default(mapStateToProps, mapDispatchToProps)(App);
