import { useNavigate } from 'react-router-dom';

function HomePage({ loggedInUser, onLogout }) {
  //eslint-disable-next-line const navigate = useNavigate();

  // eslint-disable-next-lineconst logout = () => {
  // eslint-disable-next-line  onLogout();
  //  eslint-disable-next-line navigate('/login');
  // eslint-disable-next-line };

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
