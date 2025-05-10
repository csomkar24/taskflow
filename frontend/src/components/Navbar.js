import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTasks, faPlus, faHome } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const location = useLocation();

  // Check if current route is active
  const isActive = (path) => {
    return location.pathname === path ? 'active' : '';
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark shadow-sm">
      <div className="container">
        <Link className="navbar-brand fw-bold d-flex align-items-center" to="/">
          <FontAwesomeIcon icon={faTasks} className="me-2" />
          TaskFlow
        </Link>
        
        <button 
          className="navbar-toggler" 
          type="button" 
          data-bs-toggle="collapse" 
          data-bs-target="#navbarNav"
          aria-controls="navbarNav" 
          aria-expanded="false" 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link 
                className={`nav-link d-flex align-items-center ${isActive('/')}`} 
                to="/"
              >
                <FontAwesomeIcon icon={faHome} className="me-1" />
                Dashboard
              </Link>
            </li>
            <li className="nav-item">
              <Link 
                className={`nav-link d-flex align-items-center ${isActive('/add')}`} 
                to="/add"
              >
                <FontAwesomeIcon icon={faPlus} className="me-1" />
                Add Task
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;