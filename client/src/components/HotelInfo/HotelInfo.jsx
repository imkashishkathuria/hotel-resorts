import React, {useState } from 'react'
import './HotelInfo.css'
import { toast } from 'react-hot-toast'

const HotelInfo = () => {
  const [text, setText] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.");
  const [isEditing, setIsEditing] = useState(false);




  const handleSave =() => {
    setIsEditing(false);
    localStorage.setItem("inlinetext", text);
    console.log("Text Updated");
    toast.success("Text Updated");
    fetch("http://127.0.0.1:5000/update-section", {
      method: "POST",
      headers: {
        'Content-type':'application/json',
      },
      body: JSON.stringify({ 
        component:"Textarea paragraph",
        field: "textField",
        value: text })
    });

  }

  

  return (
    <div className='info-container'>
      <div className='rectangle' />
      <img src='/Video Button.png' />
      <div className='about'>
        <div className='about-line' />
        <p className='about-heading'>Discover our hotel</p>
        <h1>Enjoy A Luxury Experience</h1>
        {isEditing ? (
          <>
            <textarea type='text' value={text} onChange={(e) => setText(e.target.value)} className='edit-input' rows={4} />
            <button className='edit-btn'
            onClick={handleSave}
            >Save</button>
          </>
        ) : (
          <>
            <p className='lorem'>{text}</p>
            <div className='cta-edit'>
              <div className='about-btn'>
                <p>Discover More</p>
                <img src='/XMLID_67_.png' />
              </div>
              <div className='about-btn' onClick={() => setIsEditing(true)}>
                <p>Edit Button</p>
                <img src='/XMLID_67_.png' />
              </div>
             


            </div>
            
          </>
        )}
      

      </div>

    </div>
  )
}

export default HotelInfo
