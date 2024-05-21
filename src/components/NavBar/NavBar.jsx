import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './NavBar.css';
import imgPerfil from '../../assets/img/logoss.svg';
import { getToken } from '../../utils/auth';
import { useUser } from '../../shared/hooks/useUser.jsx';
import { useHotel } from '../../shared/hooks/useHotel.jsx';

export const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [dropdownActive, setDropdownActive] = useState(false);
  const { loading, user, getIdFromToken } = useUser();
  const { getHotel, isLoading, selectedHotel } = useHotel();
  const navigate = useNavigate();

  const admHotel = getIdFromToken()


  const handleScroll = () => {
    if (window.scrollY > 0) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  const handleUser = () => {
    navigate('/UserProfile');
    getToken()
    setDropdownActive(false);
  };

  const handleLogout = () => {
    // Eliminar el token de localStorage
    localStorage.removeItem('authToken');
    // Redirigir al usuario a la página de inicio de sesión
    navigate('/login');
  };

  const handleMyHotel = () => {
    if (selectedHotel && selectedHotel[0]) {
      const id = selectedHotel[0]._id;
      navigate(`/InfoHotel/${id}`);
    } else {
      console.log('Hotel no encontrado');
    }
};

  const toggleDropdown = () => {
    setDropdownActive(!dropdownActive);
  };


  useEffect(() => {
    getHotel(admHotel)
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
        {!loading && user && user.userLogged && (
            <div>
              <div className="btn" onClick={toggleDropdown}>
          
          <button><img className='imgButton' src={ user.userLogged.profileImageUrl || imgPerfil} alt="Profile" /></button>
          <div className={`dropdown ${dropdownActive ? 'active' : ''}`}>
            <ul className="dropdown-content">
              <li><span className='btn-perfil' onClick={handleUser}>Profile</span></li>
              <li><span className='btn-perfil'>Settings</span></li>
              
                {user.userLogged.role === 'ADMINHOTEL' && (
                  <li><span className='btn-perfil' onClick={handleMyHotel}>MyHotel</span></li>
                )}
              
            
              <li><span className='btn-perfil' onClick={handleLogout}>LogOut</span></li>
            </ul>
          </div>
        </div>
            </div>
          )}
        
      </header>
    </div>
  );
};
