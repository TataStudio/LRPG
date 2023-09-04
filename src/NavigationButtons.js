import React from 'react';
import { Link } from 'react-router-dom';

function NavigationButtons({ loggedInUser, onLogout: handleLogout }) {
  return (
    <div className="navigation-buttons-container d-flex align-items-center">
      {!loggedInUser ? (
        <>
          <Link to="/login" className="btn btn-outline-light" style={{ marginRight: '20px' }}>Login</Link>
          <Link to="/register" className="btn btn-outline-light">Register</Link> {/* Bootstrap button styling added */}
        </>
      ) : (
        <>
          <Link to="/profile" className="btn btn-outline-light mr-2">Profile</Link> {/* Bootstrap button styling and margin added */}
          <Link to="/settings" className="btn btn-outline-light mr-2">Settings</Link> {/* Bootstrap button styling and margin added */}
          <button onClick={handleLogout} className="btn btn-outline-light">Logout</button> {/* Bootstrap button styling added */}
        </>
      )}
    </div>
  );
}

export default NavigationButtons;
