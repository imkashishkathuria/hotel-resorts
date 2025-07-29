import React from 'react'
import Header from '../components/Header/Header'
import HotelInfo from '../components/HotelInfo/HotelInfo'
import RoomOptions from '../components/RoomOptions/RoomOptions'
import Testimonials from '../components/Testimonials/Testimonials'
import Team from '../components/Team/Team'
import NewsUpdates from '../components/NewsUpdates/NewsUpdates'
import Footer from '../components/Footer/Footer'
import { ToastBar, Toaster } from 'react-hot-toast'

const Home = () => {
  return (
    <div>
      <Toaster />
        <Header />
        <HotelInfo />
        <RoomOptions />
        <Testimonials />
        <Team />
        <NewsUpdates />
        <Footer />
    </div>
  )
}

export default Home
