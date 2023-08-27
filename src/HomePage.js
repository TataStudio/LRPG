import { useNavigate } from 'react-router-dom';

function HomePage({ loggedInUser, onLogout }) {
  console.log("Rendering HomePage with loggedInUser:", loggedInUser);  
  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div className="homepage-container">
      <h2>Welcome to LRPG</h2>

      {loggedInUser ? (
        <div>
          <h3>Welcome back, {loggedInUser}!</h3>
          <p>Here's your personalized dashboard content.</p>
          {/* You can add more personalized user content here */}
          
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <p>Please log in to access your personalized content.</p>
        </div>
      )}

      {/* Add navigation options for different sections of your site */}
      <nav>
        <ul>
          <li><button onClick={() => navigate('/profile')}>Profile</button></li>
          <li><button onClick={() => navigate('/settings')}>Settings</button></li>
          {/* Add more navigation options as needed */}
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
