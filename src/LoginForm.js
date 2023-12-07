import React, { useState,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Modal, Form, Button } from 'react-bootstrap';

function LoginForm({ showLoginModal, onLogin, onClose }) {
  const navigate = useNavigate();
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
        onLogin(data.username); // or any other necessary user info
        onClose();
        navigate('/');
      } else {
        const data = await response.json();
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("Error logging in: " + error.message);
    }
  };

  return (
    <Modal show={showLoginModal} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Login</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
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
          <div className="mt-3">
            <Button variant="primary" type="submit" onClick={login}>
              Login
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
}

export default LoginForm;