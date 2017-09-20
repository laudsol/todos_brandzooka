import React from 'react';
import FacebookLogin from 'react-facebook-login';
import './App.css';

const Login = ({facebookUserData, responseFacebook}) => {

// responseFacebook (response) {
//   console.log(response);
//   //anything else you want to do(save to localStorage)...
// }

// const responseFacebook = (response) => {
// console.log(response);
// }

// 
  return (
    <div>
      <FacebookLogin
         socialId="172653113295100"
         language="en_US"
         scope="public_profile,email"
         responseHandler={responseFacebook}
         xfbml={true}
         fields="id,email,name"
         version="v2.5"
         className="fbLoginBtn"
        //  onClick={() => facebookUserData(responseFacebook)}
       />
    </div>
  );

}

export default Login;
