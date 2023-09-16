import React from 'react';
import Login from '../components/Login';

const LoginPage = () => {
  const handleLogin = (formData) => {
    // Add logic to handle login (e.g., send request to backend)

    // For now, let's just log the form data
    console.log('Form Data:', formData);
  };

  return (
    <div>
      <h1>Login</h1>
      <Login onLogin={handleLogin} />
    </div>
  );
};

export default LoginPage;
