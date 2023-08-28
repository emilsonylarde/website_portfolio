import React from 'react'
import './Navbar.css'
import emil_logo from '../../assets/emil_logo.svg'
import e from '../../assets/E 1.svg'
import {Link} from 'react-scroll'

const Navbar = () => {
  return (
    <div>
        <nav className='navbar'>
              <img src={emil_logo} alt='logo' className='logo'></img> 
              <div className='navbarMenu'>
                <Link className='navbarMenuList'>Home</Link>
                <Link className='navbarMenuList'>About Me</Link>
                <Link className='navbarMenuList'>Skills</Link>
                <Link className='navbarMenuList'>Portfolio</Link>
                <Link className='navbarMenuList'>Services</Link>
                <Link className='navbarMenuList'>Contact</Link>
              </div>
              <img src={e} alt='e-logo' className='e-logo'></img>
        </nav>
    </div>
  )
}

export default Navbar
