import React, { useEffect, useRef, useState } from 'react'
import './RoomOptionsCard.css'
import Modal from '../Modal/Modal';

const RoomOptionsCard = ({heading, price, reverse}) => {
  const [openModal, setOpenModal] = useState(false);
  const buttonRef = useRef(null);
  const modalRef = useRef(null);
  const [storedData, setStoredData] = useState(null);

  
  useEffect(() => {
    const handleClickOutside = (e)=> {
          if(buttonRef.current && 
            !buttonRef.current.contains(e.target) &&
            modalRef.current &&
            !modalRef.current.contains(e.target)
           )
            setOpenModal(false);

    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    }

  },[]);
  useEffect(() => {
    const storedItem = localStorage.getItem("item");
    if(storedItem) {
      const {text, action} = JSON.parse(storedItem);
      console.log("text", text);
      console.log("action", action);
      setStoredData({text,action});
    }
  },[openModal])

   return (
    <div className={`${'room-section-main'} ${reverse ? 'room-section-main-reverse':'room-section-main'}`}>
    <div className={`${'room-card-container'} ${reverse ? 'room-card-container-reverse' : 'room-card-container'}`}>
      <div className='room-btn'>
        <div className='room-p'>
      <p>{heading}</p>
      <h2>{price}</h2>
      </div>
     <div className='room-p-btn' onClick={() =>setOpenModal(true)} ref={buttonRef}>
          <p>Add Button</p>
          <h1>+</h1>
       </div>
       {storedData && (<div className='room-p-btn'>
          <p className='cta-btn'>{storedData.text}</p>
          <h1></h1>
       </div>)}
      
      </div>
       {openModal && (
        <Modal onClose={()=>setOpenModal(false)} modalRef={modalRef}/>
       )}
      <div className='room-card-line' />
      <div className='room-card-facility'>
        <div className='room-row-1'>
          <div className='room-icons'>
            <img src='/050-staff (1).png' />
            <p>1-2 Persons</p>
          </div>
          <div className='room-icons'>
            <img src='/Vector (3).png' />
            <p>King Size Bed</p>
          </div>
        </div>
        <div className='room-row-1'>
          <div className='room-icons'>
            <img src='/009-bathtub (1).png' />
            <p>Bathub</p>
          </div>
          <div className='room-icons'>
            <img src='/Group (3).png' />
            <p>Free Wifi</p>
          </div>
        </div>
           <div className='room-row-1'>
         <div className='room-icons'>
            <img src='/025-food service.png' />
            <p>Free Breakfast</p>
          </div>
          <div className='room-icons'>
            <img src='/Group (4).png' />
            <p>Air conditioner</p>
          </div>
        </div>
      </div>
      <div className='room-card-details'>
        <div className='room-card-btn1'>
          <p>Details</p>
          <img src='/XMLID_67_.png' />
       </div>
       <div className='room-card-btn2'>
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
