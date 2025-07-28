import React from 'react'
import './RoomOptionsCard.css'

const RoomOptionsCard = ({heading, price, reverse}) => {
   return (
    <div className={`${'room-section-main'} ${reverse ? 'room-section-main-reverse':'room-section-main'}`}>
    <div className={`${'room-card-container'} ${reverse ? 'room-card-container-reverse' : 'room-card-container'}`}>
      <p>{heading}</p>
      <h2>{price}</h2>
      <div className='room-card-line' />
      <div className='room-card-facility'>
        <div className='row-1'>
          <div className='icons'>
            <img src='/050-staff (1).png' />
            <p>1-2 Persons</p>
          </div>
          <div className='icons'>
            <img src='/Vector (3).png' />
            <p>King Size Bed</p>
          </div>
        </div>
        <div className='row-1'>
          <div className='icons'>
            <img src='/009-bathtub (1).png' />
            <p>Bathub</p>
          </div>
          <div className='icons'>
            <img src='/Group (3).png' />
            <p>Free Wifi</p>
          </div>
        </div>
           <div className='row-1'>
         <div className='icons'>
            <img src='/025-food service.png' />
            <p>Free Breakfast</p>
          </div>
          <div className='icons'>
            <img src='/Group (4).png' />
            <p>Air conditioner</p>
          </div>
        </div>
      </div>
      <div className='room-card-details'>
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
    <div className='room-div2' />
    </div>
  )
}

export default RoomOptionsCard
