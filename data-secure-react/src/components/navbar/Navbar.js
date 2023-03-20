import React from 'react'
import './NavbarStyles.css'
import { SiDatabricks } from 'react-icons/si'
import { FaBars} from 'react-icons/fa'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="conainer">
            <div className="logo">
                <SiDatabricks className='icon'/>
                <h1>Secured</h1>
            </div>
            <ul className="nav-menu">
                <li>Home</li>
                <li>Recovery</li>
                <li>Cloud</li>
                <li>Contact</li>
                <button>Sign in</button>
            </ul>
            <div className="humburger">
                <FaBars/>
            </div>
        </div>
    </div>

  )
}

export default Navbar