import React from 'react'
import './RoomAmenities.css'

const RoomAmenities = () => {
  return (
    <div className='room-amenities-container'>
        <div className='amenities-line' />
        <p>The Essential in-room amenities</p>
        <div className='amenities-para'>
        <h2>We Have What You Need</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>

        </div>
        <div className='amenitites-categ'>
            <div className='amenitites-cate2'>
                <div className='amenity1'>
                    <img src='/Item 1 (3).png' />
                    <img src='/Item 5 (1).png' />
                </div>
                 <div className='amenity1'>
                    <img src='/Item 2 (3).png' />
                    <img src='/Item 6.png' />
                </div>
                <div className='amenity1'>
                    <img src='/Item 3 (1).png' />
                    <img src='/Item 7.png' />
                </div>
                <div className='amenity1'>
                    <img src='/Item 4.png' />
                    <img src='/Item 8.png' />
                </div>

            </div>
            

        </div>
        
      
    </div>
  )
}

export default RoomAmenities
