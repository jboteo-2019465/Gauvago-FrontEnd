import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import Aos from 'aos';
import 'aos/dist/aos.css';
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
    Aos.init({ duration: 2000 });
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

      <div id="showcase" className="showcase">
        <div className="overlay"></div>
        <div data-aos="zoom-out" className="container">
          <h1>Welcome to Gauvago</h1>
          <p className="large">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis, consectetur quaerat vero, praesentium saepe omnis aut reprehenderit tempora est aspernatur cupiditate doloremque. Ratione reiciendis velit commodi expedita quos provident fugit iusto. Assumenda necessitatibus deleniti eum provident iste voluptate, ipsam nulla!</p>
          <a href="#" className="btn btn-light">About Our Hotel's</a>
        </div>
      </div>
    </div>
  );
};
