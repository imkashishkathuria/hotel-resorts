import React from 'react'
import './RoomHero.css'
import Navbar from '../Navbar/Navbar'
import RoomOptionsCard from '../RoomOptionsCard/RoomOptionsCard'

const RoomHero = () => {
  return (
    <div className='room-container'>
      <Navbar />
      <div className='room-hero'>
      <div className='room-line' />
      <p>our room</p>
      <h2>
        Discover The Best Room For You
      </h2>
      
      </div>
      
    </div>
  )
}

export default RoomHero
