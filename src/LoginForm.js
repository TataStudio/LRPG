import React, { useState } from 'react';

function LoginForm({ onLogin, onClose }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (event) => {
    event.preventDefault();
    onLogin(email, password);
    onClose();
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
