
import './HeroRoomOptions.css'
import RoomOptionsCard from '../RoomOptionsCard/RoomOptionsCard'

const HeroRoomOptions = () => {
  return (
    <div className='hero-room-container'>
      <div className='hero-room-line' />
      <p>our room choices</p>
      <h1>Luxury Rooms & Suites</h1>
      <div className='room-options'>
      <RoomOptionsCard heading="Superior Suite" price="$300/Night" />
      <RoomOptionsCard heading="Junior Suite" price="$270/Night" reverse={true} />
      <RoomOptionsCard heading="Deluxe Room" price="$210/Night" />
      </div>
      <img src='/Slider.png' />

      
    </div>
  )
}

export default HeroRoomOptions
