import React, { useEffect, useRef, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const dropdownRef = useRef(null);
  const navigate = useNavigate();

  useEffect(()=>{
    const handleClickOutside = (e) => {
      if(dropdownRef.current && !dropdownRef.current.contains(e.target)){
        setOpenDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }
  },[])

  return (
    <div className='nav-container'>
      <img src='/logo.png' className='logo' />
      <div className='nav'>
        <ul>
          <div className='icon' onClick={() => navigate("/")}>
            <li>Home</li>
            <img src='XMLID_55_ (1).png' className='icon-img' />
          </div>
          <li onClick={() => navigate("/room")}>Room</li>
          <li>Service</li>
          <div className='nav-pages' ref={dropdownRef}  >
          <div className='icon'onClick={() => setOpenDropdown(prev=> !prev)}>
            <li>Pages</li>
            <img src='XMLID_55_ (1).png' className='icon-img' />
          </div>
          {openDropdown && (
            <div className='nav-drdn'>
              {["room","single room", "blog","single blog", "404 page"].map((item, index) => (
                <p key={index} onClick={() => {if (index === 0) navigate("/room");}}>{item}</p>
              ))}
            </div>
          )}
          </div>
          <li>Contact Us</li>
        </ul>
        
      </div>
    </div>
  )
}

export default Navbar
