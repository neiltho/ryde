import React, { useState } from 'react';
import Login from '../components/Login';
import LocationCollector from '../components/LocationCollector';

const Home = () => {
  const [user, setUser] = useState(null);

  const handleLogin = (formData) => {
    // Assuming successful login sets the user state
    setUser(formData);
  };

  return (
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.fullName}!</h1>
          <LocationCollector />
        </div>
      ) : (
        <div>
          <h1>Login</h1>
          <Login onLogin={handleLogin} />
        </div>
      )}
    </div>
  );
};

export default Home;
