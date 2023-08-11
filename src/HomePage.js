import { useNavigate } from 'react-router-dom';

function HomePage({ loggedInUser, onLogout }) {
  const navigate = useNavigate();

  const logout = () => {
    onLogout();
    navigate('/login');
  };

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to our site!</p>
      {loggedInUser && <div>
        <p>You're logged in as {loggedInUser}</p>
        <button onClick={onLogout}>Logout</button>
      </div>}
    </div>
  );
}

export default HomePage;
