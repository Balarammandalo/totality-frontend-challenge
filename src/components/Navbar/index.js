import "./index.css"
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className='nav-container'>
      <ul className='nav-lists'>
        <li className='nav-link'><Link to="/">Home</Link></li>
        <li className='nav-link'><Link to="/store">Book Store</Link></li>
        <li className='nav-link'><Link to="/cart">Cart</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
