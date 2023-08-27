import React, { useState } from 'react';

function LoginForm({ onLogin, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = async(event) => {
    event.preventDefault();

    try {
      const response = await fetch("https://lrpg.servegame.com/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON. stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        onLogin(data.email); // or any other necessary user info
        onClose();
      } else {
        const data = await response.json();
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("Error logging in: " + error.message);
    }
};


  return (
    <form id="loginForm" onSubmit={login}>
      <div className="modal-header">
        <h2>Login</h2>
        <span className="close" onClick={onClose}>×</span>
      </div>
      <div className="modal-body">
        <label>Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />
        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />
        <button type="submit">Login</button>
      </div>
    </form>
  );
}

export default LoginForm;