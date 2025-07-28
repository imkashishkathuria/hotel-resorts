import React from 'react'
import './RoomCards.css'

const RoomCards = () => {
  return (
    <div className='card-container'>
      <p>Superior Suite</p>
      <h2>$300/Night</h2>
      <div className='card-line' />
      <div className='card-facility'>
        <div className='row-1'>
          <div className='icons'>
            <img src='/050-staff.png' />
            <p>1-2 Persons</p>
          </div>
          <div className='icons'>
            <img src='/008-double bed.png' />
            <p>King Size Bed</p>
          </div>
        </div>
        <div className='row-1'>
          <div className='icons'>
            <img src='/009-bathtub.png' />
            <p>Bathub</p>
          </div>
          <div className='icons'>
            <img src='/Group (1).png' />
            <p>Free Wifi</p>
          </div>
        </div>
           <div className='row-1'>
         <div className='icons'>
            <img src='/Group.png' />
            <p>Free Breakfast</p>
          </div>
          <div className='icons'>
            <img src='/Group (2).png' />
            <p>Air conditioner</p>
          </div>
        </div>
      </div>
      <div className='card-details'>
        <div className='card-btn1'>
          <p>Details</p>
          <img src='/XMLID_67_.png' />
       </div>
       <div className='card-btn2'>
          <p>Book Now</p>
          <img src='/XMLID_67_1.png' />
       </div>

      </div>
    </div>
  )
}

export default RoomCards
