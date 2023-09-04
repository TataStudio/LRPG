import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import LoginPage from './LoginPage';
import RegisterPage from './RegisterPage';
import HomePage from './HomePage';
import NavigationButtons from './NavigationButtons';
import logo from './assets/LRPG-logo-white.png';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
    const [loggedInUser, setLoggedInUser] = useState(null);

    const handleLogin = (username) => {
        setLoggedInUser(username);
    };

    const handleLogout = () => { setLoggedInUser(null); };

    return (
      <Router>
          <nav className="navbar navbar-expand-lg navbar-dark py-4" style={{ backgroundColor: '#343a40' }}>
              <div className="container-fluid">
                  <a className="navbar-brand pl-3" href="/">
                      <img src={logo} alt="LRPG Logo" style={{ width: '100px', height: 'auto' }} />
                  </a>

                  <div className="d-flex ml-auto pr-5">
                      <NavigationButtons loggedInUser={loggedInUser} onLogout={handleLogout} />
                  </div>
              </div>
          </nav>

          <div className="container mt-5">
              {!loggedInUser ? (
                  <div className="text-center mb-4">
                      <h1 className="display-3">Welcome to RPG Life!</h1>
                  </div>
              ) : null}

              <Routes>
                  <Route path="/" element={<HomePage loggedInUser={loggedInUser} onLogout={handleLogout} />} />
                  <Route path="/login" element={<LoginPage />} />
                  <Route path="/register" element={<RegisterPage />} />
                  {/* ... other routes if necessary */}
              </Routes>
          </div>
      </Router>
  );
}

export default App;