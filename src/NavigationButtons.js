import React from 'react';
//import { useNavigate } from 'react-router-dom';

function NavigationButtons({ loggedInUser, handleLogout, onRegisterClick, onLoginClick }) {
    const login = () => {
      onLoginClick(); // this will open the login modal
    };
  
    return (
      <div>
        {!loggedInUser && <button onClick={login}>Login</button>}
        {!loggedInUser && <button onClick={onRegisterClick}>Register</button>}
        {loggedInUser && <button onClick={handleLogout}>Logout</button>}
      </div>
    );
  }
  
  export default NavigationButtons;
  
  
  