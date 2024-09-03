// src/components/Login.js
import React from 'react';
import { GoogleLogin } from '@react-oauth/google';

function login() {
  const onSuccess = (response) => {
    console.log('Login Success:', response);
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

export default login;
