import React, { useState } from 'react';
import axios from 'axios';  // import axios
import { Modal, Form, Button } from 'react-bootstrap';

function RegisterForm({ show, onHide }) { 
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState(''); 

  const BASE_URL = 'https://lrpg.servegame.com';

  const validatePassword = (password) => {
    // Check if password is at least 8 characters long and contains at least 2 types of characters (letters, numbers, special characters)
    const passwordRegex = /^(?:(?=.*\d)(?=.*[a-zA-Z])|(?=.*\d)(?=.*[^a-zA-Z0-9])|(?=.*[^a-zA-Z0-9])(?=.*[a-zA-Z])).{8,}$/;
    return passwordRegex.test(password);
  }

  const handleRegister = async () => {  
    try{
      if (!validatePassword(password)) {
        alert('Password must contain at least 8 characters, including at least two of the following: letters, numbers, and special characters');
        return;
      }

      if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
      }

      await axios.post(`${BASE_URL}/api/auth/register`, {
        username,
        email,
        password
      });

      console.log('Registration successful');

      // Send email verification
      await axios.post(`${BASE_URL}/send-email`, {
        email,
        subject: 'Email Verification',
        message: 'Please verify your email',
      });

      alert('Verification email has been sent!');

    } catch (err) {
      console.error('Failed to register or send verification email:', err);
    } finally {
      onHide();
    }
  };



  return (
    <Modal show={show} onHide={onHide}>
      <Modal.Header closeButton>
        <Modal.Title>Register</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group controlId="formUsername">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formEmail">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Form.Group controlId="formConfirmPassword">
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Confirm your password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Form.Group>
          <div className="mt-3">
            <Button variant="primary" onClick={handleRegister}>
              Register
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default RegisterForm;