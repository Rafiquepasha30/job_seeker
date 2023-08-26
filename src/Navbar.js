import React, { useState } from 'react'
import './Navbar.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';


const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <div className='header'>
      
        <h1 className='nav'>ISHTEHAR</h1>
      
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
          <li>
            <Link to='/About'>About</Link>
          </li>
          <li>
            <Link to='/Find Jobs'>Find Jobs</Link>
          </li>
          <li>
            <Link to='/Login'>Login</Link>
          </li>
      </ul>
    <div className='hamburger' onClick={handleClick}>
      {click ? (<FaTimes size={20} style={{color:'#fff'}}/>) : (<FaBars size={20} style={{color:'#fff'}}/>) }
   
    </div>      
    </div>
    
  )
  
}

export default Navbar
