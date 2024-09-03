// src/App.js
import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import login from './components/Login';
import logout from './components/Logout';

const clientId = '86933214019-a8usoan0tlj8sc116q0npudn4ftn9lu4.apps.googleusercontent.com';

function App() {
  return (
    <GoogleOAuthProvider clientId={clientId}>
      <div className="App">
        <h1>Google Login Example</h1>
        <login />
        <logout />
      </div>
    </GoogleOAuthProvider>
  );
}

export default App;
