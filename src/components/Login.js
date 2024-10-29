import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../App.css';

function Login({ setIsLoggedIn }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://ma-gap.gl.at.ply.gg:48289/api/login', { email, password });
      setSuccess(response.data.message);
      setError('');
      setIsLoggedIn(true);
      localStorage.setItem('isLoggedIn', 'true');
      setTimeout(() => {
        navigate('/');
      }, 1000);
    } catch (error) {
      setError('Login failed. Please check your credentials.');
      setSuccess('');
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form-card">
        <h2>Login</h2>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required className="input" />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required className="input" />
        <button type="submit" className="button">Login</button>
        {success && <p className="success-message">{success}</p>}
        {error && <p className="error-message">{error}</p>}
      </form>
    </div>
  );
}

export default Login;
