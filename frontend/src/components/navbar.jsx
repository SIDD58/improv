// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';
import '../../public/navbar.css'

export default function Navbar() {
    return (
      <nav className="navbar">
        <ul className="navLinks">
          <li><Link to="/" className="link">Home</Link></li>
          <li><Link to="/games" className="link">Games</Link></li>
          <li><Link to="/events" className="link">Events</Link></li>
          <li><Link to="/admin" className="link">Admin</Link></li>
          <li><Link to="/name-game" className="link">NameGame</Link></li>
          <li><Link to='/register' className='link'>Register</Link></li>
          <li><Link to='/login' className='link'>Login</Link></li>

        </ul>
        <div className="logo">Improv Club</div>
      </nav>
    );
  }



