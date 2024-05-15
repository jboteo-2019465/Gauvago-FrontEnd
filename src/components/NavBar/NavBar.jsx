import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';

import imgPerfil from '../../assets/img/logoss.svg'

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const navigate = useNavigate();

  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleUser = async (e) => {
    navigate('/UserProfile');
    setDropdownActive(false);
}

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };

  useEffect(() => {
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <header id="header" className={scrolled ? 'scrolled' : ''}>
        <h2>Gauvago</h2>
        <nav className='container'>
          <ul className="nav-links">
            <li><a href="#">Services</a></li>
            <li><a href="#">Projects</a></li>
            <li><a href="#">About</a></li>
          </ul>
        </nav>
        <div className="btn" onClick={toggleDropdown}>
          <button><img className='imgButton' src={imgPerfil}/></button>
          <div className={`dropdown ${dropdownActive ? 'active' : ''}`}>
            <ul className="dropdown-content">
            <li><button className='btn' onClick={handleUser}>Profile</button></li>
              <li><button className='btn'>Settings</button></li>
              <li><button className='btn'>LogOut</button></li>
            </ul>
          </div>
        </div>
      </header>

     </div>
  );
};
