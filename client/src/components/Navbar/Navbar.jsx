import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='nav-container'>
      <img src='/logo.png' className='logo' />
      <div className='nav'>
        <ul>
          <div className='icon'>
            <li>Home</li>
            <img src='XMLID_55_ (1).png' className='icon-img' />
          </div>
          <li>About</li>
          <li>Service</li>
          <div className='icon'>
            <li>Pages</li>
            <img src='XMLID_55_ (1).png' className='icon-img' />
          </div>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar
