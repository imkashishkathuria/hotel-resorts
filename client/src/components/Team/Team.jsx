import React, { useEffect, useState } from 'react'
import './Team.css'
import { toast } from 'react-hot-toast'

const Team = () => {
  const [image, setImage] = useState(null);
  const [imageURL, setImageURL] = useState('');
  const [preview, setpreview] = useState('');

  useEffect(() => {
    const savedImage = localStorage.getItem("UploadedImage");
    if (savedImage) {
      setImageURL(savedImage);
    }
  }, [])


  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      console.log(file);
      setpreview(URL.createObjectURL(file));
    }
  }

  const handleUpload = async () => {
    if (!image) return alert("Please select an image");

    const formData = new FormData();
    formData.append("image", image);
    formData.append("image_id", 123);
    console.log(formData)

    try {
      const res = await fetch('https://hotel-resorts-4.onrender.com/upload', {
        method: "POST",
        body: formData,
      });
      const data = await res.json();
      if (res.ok) {
        const full_url = `https://hotel-resorts-4.onrender.com${data.url}`;
        setImageURL(full_url);
        localStorage.setItem("UploadedImage", full_url);
        toast.success("Image Uploaded");
        setpreview('');
      } else {
        alert(data.error);
      }
    } catch (error) {
      alert("Upload failed", error);
    }
  }

  return (
    <div className='team-container'>
      <div className='team-line' />
      <p>meet our team</p>
      <h1>Expert Team Persons</h1>
      <h3>Upload and show Image</h3>
      <input type='file' accept='image/*' onChange={handleFileChange} />
      {preview && (
        <div>
          <img src={preview} width={70} />
        </div>
      )}
      <div className='boxes'>
        
        <img src='/Item 1.png'/>
        {imageURL && (
          <div className='upload-img'>
            <img src={imageURL} />
          </div>
        )}
        {!imageURL && (
             <img src='/Item 2.png' />
        )}
       
        <img src='/Item 1.png' />
        <img src='/Item 1.png' />

      </div>
      <button onClick={handleUpload}>Upload</button>
    </div>
  )
}

export default Team
