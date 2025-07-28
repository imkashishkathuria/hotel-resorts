import React from 'react'
import './Testimonials.css'

const Testimonials = () => {
  return (
    <div className='testimonials-container'>
        <div className='testimonials-line' />
        <p>our customer review</p>
        <h2>What Our Client Says</h2>
        <img src="/Rating.png" />
        <h3>“ Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. “</h3>
        <div className='guest'>
          <img src='/Image 1.png' />
          <div className='dean'>
            <h1>Jackson Dean</h1>
            <p>Guest</p>
          </div>
        </div>
        <img src='/Slider.png' className='slider'/>
    </div>
  )
}

export default Testimonials
