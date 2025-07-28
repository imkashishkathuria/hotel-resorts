import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import RoomHero from '../components/Room-Hero/RoomHero'
import HeroRoomOptions from '../components/HeroRoomOptions/HeroRoomOptions'
import Services from '../components/Services/Services'

const Room = () => {
  return (
    <div>
      <RoomHero />
      <HeroRoomOptions />
      <Services />
    </div>
  )
}

export default Room
