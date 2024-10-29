import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../App.css';

function Home({ isLoggedIn, handleLogout }) {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleProfileClick = () => {
    if (isLoggedIn) {
      navigate('/profile');
      toggleDropdown();
    }
  };

  return (
    <div className="home-container">
      <header className="navbar">
        <div className="business-title">Business Title</div>
        <nav className="nav-links">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/about" className="nav-link">About</Link>
          <Link to="/services" className="nav-link">Services</Link>
          <Link to="/contact" className="nav-link">Contact</Link>
          <div className="dropdown">
            <button className="dropdown-toggle" onClick={toggleDropdown}>
              {isLoggedIn ? 'Profile' : 'Account'}
            </button>
            {dropdownOpen && (
              <div className="dropdown-menu">
                {isLoggedIn ? (
                  <>
                    <Link to="#" onClick={handleProfileClick} className="dropdown-item">Profile</Link>
                    <button className="dropdown-item" onClick={handleLogout}>Logout</button>
                  </>
                ) : (
                  <>
                    <Link to="/login" className="dropdown-item">Login</Link>
                    <Link to="/register" className="dropdown-item">Register</Link>
                  </>
                )}
              </div>
            )}
          </div>
        </nav>
      </header>
      <div className="welcome-section">
        <h1>Welcome to the Home Page.</h1>
      </div>
    </div>
  );
}

export default Home;
