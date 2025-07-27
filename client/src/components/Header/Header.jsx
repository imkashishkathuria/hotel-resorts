import React from 'react'
import './Header.css'
import Navbar from '../Navbar/Navbar'

const Header = () => {
  return (
    <div className='container'>
      <Navbar />
      <div className='main'>
        <div className='line' />
        <p className='para'>Best Place to relax & enjoy</p>
        <p className='heading'>Perfect Place to Enjoy Your Life</p>
        <div className='other-main'>
          <div className='rating'>
            <div className='images'>
              <div className='images2'>
                <img src='Image 1.png' />
                <img src='Image 1.png' />
                <img src='Image 1.png' />
              </div>
              <div className='rating-2'>
                <p>4.8 Rated Around The World</p>
                <img src='Rating.png' />
              </div>
            </div>
            <div className='arrows'>
              <img src='Left Arrow.png' />
              <img src='Right Arrow.png' />
            </div>
          </div>
          <div className='booking-form'>
            <div className='check'>
              <p>Check In</p>
              <div className='calender'>
                <p>24 December 2023</p>
                <img src='/_x36__1_.png' />
              </div>
            </div>
            <div className='check'>
              <p>Check Out</p>
              <div className='calender'>
                <p>28 December 2023</p>
                <img src='/_x36__1_.png' />
              </div>
            </div>

            <div className='room-guest'>
              <div className='room1'>
                <p>Room</p>
                <div className='room'>
                  <p>1</p>
                  <img src='XMLID_140_.png' />
                </div>
              </div>
              <div className='room1'>
                <p>Guest</p>
                <div className='room'>
                  <p>1</p>
                  <img src='XMLID_140_.png' />
                </div>
              </div>

            </div>
            <div className='btn'>
              <p>Check Availability</p>
              <img src='/XMLID_67_.png' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
