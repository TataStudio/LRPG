function HomePage({ loggedInUser }) {
  console.log("Rendering HomePage with loggedInUser:", loggedInUser);

  if (loggedInUser) {
    return (
      <div className="homepage-container">
        <h2>Welcome to LRPG</h2>
        <h3>Welcome back, {loggedInUser}!</h3>
        <p>Here's your personalized dashboard content.</p>
        {/* You can add more personalized user content here */}
      </div>
    );
  } 

  return (
    <div className="homepage-container">
      <h2>Welcome to LRPG</h2>
      <p>Please log in to access your personalized content.</p>
    </div>
  );
}

export default HomePage;
