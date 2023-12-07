import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import LoginForm from './LoginForm';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import NavigationButtons from './NavigationButtons';
import logo from './assets/LRPG-logo-white.png';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Modal, Button } from 'react-bootstrap';



function App() {
    const [loggedInUser, setLoggedInUser] = useState(null);
    const [showLoginModal, setShowLoginModal] = useState(false);
    const [showRegisterModal, setShowRegisterModal] = useState(false);

    const handleLogin = (username) => {
        setLoggedInUser(username);
        setShowLoginModal(false);
    };

    const handleLogout = () => {
        setLoggedInUser(null);
    };

    const handleLoginClick = () => {
        setShowLoginModal(true);
      };
      

    const handleRegisterClick = () => {
        setShowRegisterModal(true);
    };

    const handleModalClose = () => {
        setShowLoginModal(false);
        setShowRegisterModal(false);
    };

    return (
        <Router>
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark py-4" style={{ backgroundColor: '#343a40' }}>
                    <div className="container-fluid">
                        <a className="navbar-brand pl-3" href="/">
                            <img src={logo} alt="LRPG Logo" style={{ width: '100px', height: 'auto' }} />
                        </a>

                        <div className="d-flex ml-auto pr-5">
                            <Button variant="outline-light" onClick={handleLoginClick} style={{ marginRight: '1rem' }}>
                                Login
                            </Button>
                            <Button variant="outline-light" onClick={handleRegisterClick}>
                                Register
                            </Button>
                        </div>
                    </div>
                </nav>

                <div className="container mt-5">
                    {!loggedInUser ? (
                        <div className="text-center mb-4">
                            <h1 className="display-3">Welcome to RPG Life!</h1>
                        </div>
                    ) : null}

                    {/* Render LoginModal and RegisterModal conditionally */}
                    <LoginForm showLoginModal={showLoginModal} onLogin={handleLogin} onClose={handleModalClose} />
                    <RegisterForm show={showRegisterModal} onHide={handleModalClose} />
                    
                </div>
            </div>
        </Router>
    );
}

export default App;