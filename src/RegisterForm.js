import React, { useState } from 'react';
import axios from 'axios';  // import axios

function RegisterForm({ onRegister, onClose }) { 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 

  const register = async (event) => {  
    event.preventDefault();

    if (!validatePassword(password)) {
      alert('Password must contain at least 8 characters, including at least two of the following: letters, numbers, and special characters');
      return;
    }

    if (password !== confirmPassword) {  // check if password and confirmation password are same
        alert("Passwords do not match");
        return;
    }

    try {
      // Assuming onRegister returns a Promise
      await onRegister(username, email, password); 

      // Send an email verification request to the server after registration is successful
      await axios.post('http://18.117.166.39:8000/send-email', {
        email,
        subject: 'Email Verification',
        message: 'Please verify your email',
      });

      alert('Verification email has been sent!');
    } catch (err) {
      console.error('Failed to register or send verification email:', err);
    } finally {
      onClose();
    }
};


  const validatePassword = (password) => {
    // Check if password is at least 8 characters long and contains at least 2 types of characters (letters, numbers, special characters)
    const passwordRegex = /^(?:(?=.*\d)(?=.*[a-zA-Z])|(?=.*\d)(?=.*[^a-zA-Z0-9])|(?=.*[^a-zA-Z0-9])(?=.*[a-zA-Z])).{8,}$/;
    return passwordRegex.test(password);
  }

  return (
    <form id="registerForm" onSubmit={register}>
      <div className="modal-header">
        <h2>Register</h2>
        <span className="close" onClick={onClose}>×</span>
      </div>
      <div className="modal-body">
        <label>Username</label>
        <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="Username" required />

        <label>Email</label>
        <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="Email" required />

        <label>Password</label>
        <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="Password" required />

        <label>Confirm Password</label> {/* Confirmation password input field */}
        <input type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} placeholder="Confirm Password" required />

      </div>

      <div className="button-container">
        <button type="submit">제출</button>
        </div>
    </form>
  );
}

export default RegisterForm;
