// src/components/Logout.js
import React from 'react';
import { googleLogout } from '@react-oauth/google';

function logout() {
  const onLogout = () => {
    googleLogout();  // Thực hiện đăng xuất
    console.log('Logout successful!');
  };

  return (
    <button onClick={onLogout}>
      Logout
    </button>
  );
}

export default logout;
