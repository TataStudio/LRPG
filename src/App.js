import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import HomePage from './HomePage';
import LoginForm from './LoginForm';
import NavigationButtons from './NavigationButtons';
import './App.css';

const BASE_URL = 'https://lrpg.servegame.com';

function App() {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const isProduction = process.env.NODE_ENV === 'production';
  // Use /LRPG as basename in production, otherwise use default
  const baseName = isProduction ? '/LRPG' : '/';

  const handleRegister = async (username, email, password) => { /* ... */ };
  const handleLogin = (username) => {
    setLoggedInUser(username);
    setShowLoginModal(false);
  };
  const handleLogout = () => { setLoggedInUser(null); };

  return (
    <Router basename={baseName}>
      <div>
        {!loggedInUser && <h1>Welcome to RPG Life!</h1>}
        <NavigationButtons 
          loggedInUser={loggedInUser} 
          onLogout={handleLogout} 
          onRegisterClick={() => setShowRegisterModal(true)} 
          onLoginClick={() => setShowLoginModal(true)} 
        />
        <Routes>
          <Route path="/" element={<HomePage loggedInUser={loggedInUser} onLogout={handleLogout} />} />
          {/* ... other routes if necessary */}
        </Routes>
        
        {/* Modals rendered as centered pop-ups */}
        {showRegisterModal && (
          <div className="modal">
            <div className="modal-content">
              <RegisterForm onRegister={handleRegister} onClose={() => setShowRegisterModal(false)} />
            </div>
          </div>
        )}

        {showLoginModal && (
          <div className="modal">
            <div className="modal-content">
              <LoginForm onLogin={handleLogin} onClose={() => setShowLoginModal(false)} />
            </div>
          </div>
        )}
      </div>
    </Router>
  );
}

export default App;
