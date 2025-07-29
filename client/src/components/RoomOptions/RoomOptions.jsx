import React from 'react'
import './RoomOptions.css'
import RoomCards from '../RoomCards/RoomCards'
import Modal from '../Modal/Modal'

const RoomOptions = () => {
  return (
    <div className='room-Options-Container'>
      <div className='line1' />
      <p>
        our room choices
      </p>
      <h1>Luxury Rooms & Suites</h1>
      <div className='card-section'>
          <RoomCards />
          <div className='room-div' />

      </div>
      <div className='dots'>
      <img src='/Slider.png' />
      </div>
     
    </div>
  )
}

export default RoomOptions
