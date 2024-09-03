// src/components/Login.js
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

function Login() {
  const onSuccess = (credentialResponse) => {
    console.log('Login Success:', credentialResponse);
  };

  const onFailure = (error) => {
    console.log('Login Failed:', error);
  };

  return (
    <div>
      <GoogleLogin
        onSuccess={onSuccess}
        onError={onFailure}
      />
    </div>
  );
}

export default Login;
