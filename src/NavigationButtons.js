import React from 'react';
import { useNavigate } from 'react-router-dom';

function NavigationButtons({ loggedInUser, onLogout: handleLogout, onRegisterClick, onLoginClick }) {
  const navigate = useNavigate();

  const goToProfile = () => {
    navigate('/profile');
  };

  const goToSettings = () => {
    navigate('/settings');
  };

  return (
    <div className="navigation-buttons-container">
      {!loggedInUser ? (
        <>
          <button onClick={onLoginClick}>Login</button>
          <button onClick={onRegisterClick}>Register</button>
        </>
      ) : (
        <>
          <button onClick={goToProfile}>Profile</button>
          <button onClick={goToSettings}>Settings</button>
          <button onClick={handleLogout}>Logout</button>
        </>
      )}
    </div>
  );
}

export default NavigationButtons;
