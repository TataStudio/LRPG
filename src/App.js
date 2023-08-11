import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import HomePage from './HomePage';
import LoginForm from './LoginForm';
import NavigationButtons from './NavigationButtons';
import './App.css'; // Make sure to import your CSS file here

function App() {
  const [registeredUsers, setRegisteredUsers] = useState({});
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);


  const handleRegister = (username, email, password) => {
    if (registeredUsers[username]) {
      alert('A user with this username is already registered');
      return;
    }
    setRegisteredUsers({
      ...registeredUsers,
      [username]: { email, password },
    });
    alert('Registration successful!');
  };

  const handleLogin = (username, password) => {
    const user = registeredUsers[username];
    if (!user || user.password !== password) {
      alert('Invalid username or password');
      return;
    }
    setLoggedInUser(username);
    alert('Login successful!');
  };

  const handleLogout = () => {
    setLoggedInUser(null);
  };

  const openRegisterModal = () => {
    setShowRegisterModal(true);
  };

  const closeRegisterModal = () => {
    setShowRegisterModal(false);
  };

  const openLoginModal = () => {
    setShowLoginModal(true);
  };
  
  const closeLoginModal = () => {
    setShowLoginModal(false);
  };
  

  return (
    <Router>
      <div>
        <h1>Welcome to RPG Life!</h1>
        <NavigationButtons loggedInUser={loggedInUser} setLoggedInUser={setLoggedInUser} handleLogout={handleLogout} onRegisterClick={openRegisterModal} onLoginClick={openLoginModal} />
        <Routes>
          <Route path="/" element={loggedInUser !== 'login' && loggedInUser !== 'register' ? <HomePage loggedInUser={loggedInUser} onLogout={handleLogout} /> : null} />
        </Routes>
        {showRegisterModal && <div className="modal">
          <div className="modal-content">
            <RegisterForm onRegister={handleRegister} onClose={closeRegisterModal} />
          </div>
        </div>}
        {showLoginModal && <div className="modal">
          <div className="modal-content">
            <LoginForm onLogin={handleLogin} onClose={closeLoginModal} />
          </div>
        </div>}
      </div>
    </Router>
  );
}

export default App;