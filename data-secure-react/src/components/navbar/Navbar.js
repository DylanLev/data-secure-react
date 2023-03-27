import React, { useState } from 'react';
import './NavbarStyles.css';
import { SiDatabricks } from 'react-icons/si';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => setNav(!nav);

  return (
    <div name='top' className='navbar'>
      <div className='container'>
        <div className='logo'>
          <SiDatabricks className='icon' />
        </div>
        <div className='nav-menu'>
          <div className='nav-item'>Home</div>
          <div className='nav-item'>Recovery</div>
          <div className='nav-item'>Cloud</div>
          <div className='nav-item'>Contact</div>
        </div>
        <button className='sign-in'>Sign in</button>
        <div className='hamburger' onClick={handleNav}>
          {!nav ? <FaBars className='icon' /> : <FaTimes className='icon' />}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
