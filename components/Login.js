import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [fullName, setFullName] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    onLogin({ fullName, password });
  };

  return (
    <form onSubmit={handleLogin}>
      <div>
        <label>
          Full Name:
          <input 
            type="text"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          Password:
          <input 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
      </div>
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
