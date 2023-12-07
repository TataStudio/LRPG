// LoginPage.js
import React, { useState } from 'react';
import LoginForm from './LoginForm';

function LoginPage() {
  const [loggedInUser, setLoggedInUser] = useState(null);

  const handleLogin = (username) => {
    setLoggedInUser(username);
  };

  return (
    <div className="login-page">
      <h2>Login</h2>
      <LoginForm onLogin={handleLogin} />
      {loggedInUser && (
        <div className="welcome-message">
          <p>Welcome, {loggedInUser}!</p>
          {/* You can add more personalized content here */}
        </div>
      )}
    </div>
  );
}

export default LoginPage;
