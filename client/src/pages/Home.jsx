import React from 'react'
import Header from '../components/Header/Header'
import HotelInfo from '../components/HotelInfo/HotelInfo'
import RoomOptions from '../components/RoomOptions/RoomOptions'
import Testimonials from '../components/Testimonials/Testimonials'

const Home = () => {
  return (
    <div>
        <Header />
        <HotelInfo />
        <RoomOptions />
        <Testimonials />
    </div>
  )
}

export default Home
