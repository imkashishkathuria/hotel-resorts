import React, { useState } from 'react'
import './Modal.css'
import toast from 'react-hot-toast';

const Modal = ({onClose, modalRef}) => {
    const [text, setText] = useState('');
    const [action, setAction] = useState('');
    // const [onClose, setOnClose] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const item = localStorage.setItem("item", JSON.stringify({ text, action }));
        toast.success("Submitted");
        setAction("");
        setText("");
        onClose();
    }

    return (
        <div className='modal'>
            <div className='modal-container' ref={modalRef}>
            <div className='x'>
            <p onClick={onClose}>X</p>
            </div>
            
                <form onSubmit={handleSubmit}>
                    <div className='modal-input'>
                        <label htmlFor=''>
                            Button Text
                        </label>
                        <input type='text' placeholder='Enter text' value={text} onChange={(e) => setText(e.target.value)} />
                    </div>

                    <div className='modal-input'>
                        <label htmlFor=''>
                            URL/Action
                        </label>
                        <input type='text' placeholder='Enter url/action' value={action} onChange={(e) => setAction(e.target.value)} />
                    </div>
                    <button className='modal-btn'>
                        Submit
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Modal
