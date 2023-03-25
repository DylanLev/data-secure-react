import React,{ useState } from 'react'
import './NavbarStyles.css'
import { SiDatabricks } from 'react-icons/si'
import { FaBars, FaTimes} from 'react-icons/fa'
const Navbar = () => {
    const [nav,setNav] = useState(false);
    const handleNav = () => setNav(!nav);


  return (
    <div name='top' className='navbar'>
        <div className='conainer'>
            <div className='logo'>
                <SiDatabricks className='icon'/>
                <h1>Secured</h1>
            </div>
            <ul className= {nav?'nav-menu active':'nav menu'}>
                <li>Home</li>
                <li>Recovery</li>
                <li>Cloud</li>
                <li>Contact</li>
                <button>Sign in</button>
            </ul>
            <div className='humburger' onClick={ handleNav }>
                {!nav ? (<FaBars className='icon'/>):(<FaTimes className='icon'/>)}
                
            </div>
        </div>
    </div>

  )
}

export default Navbar