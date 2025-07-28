import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-header'>
        <div className='footer-logo'>
          <img src='/logo.png' />
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

        </div>
        <div className='footer-links'>
          <h2>USEFUL LINKS</h2>
          {["home", "about","service","room"].map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
        <div className='footer-subscribe'>
          <h2>SUBSCRIBE</h2>
          <p>Don’t miss to subscribe our news, kindly fill the form bellow</p>
          <img src='/Item 2 (1).png' />
        </div>

      </div>

      <div className='social-links'>
        <div className='social-line' />
        <div className='social-icons' >
          <img src='/Group 24.png' />
           <img src='/Group 23.png' />
            <img src='/Group 25.png' />
             <img src='/Group 26.png' />
             <img src='/Group 27.png' />
        </div>
        <div className='social-line' />

      </div>

      <div className='footer-copyright'>
        <p>© 2025 Imperial Grand Hotel. All Rights Reserved.</p>
        <div className='policy'>
          <p>Privacy Policy</p>
          <p>Terms of Use</p>
        </div>
      </div>
    </div>
  )
}

export default Footer
