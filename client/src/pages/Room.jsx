import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import RoomHero from '../components/Room-Hero/RoomHero'
import HeroRoomOptions from '../components/HeroRoomOptions/HeroRoomOptions'
import Services from '../components/Services/Services'
import RoomAmenities from '../components/RoomAmenities/RoomAmenities'
import Footer from '../components/Footer/Footer'
import { Toaster } from 'react-hot-toast'

const Room = () => {
  return (
    <div>
      <Toaster />
      <RoomHero />
      <HeroRoomOptions />
      <Services />
      <RoomAmenities />
      <Footer />
    </div>
  )
}

export default Room
