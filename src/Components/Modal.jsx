import React from 'react'
import Form from './Form';


const Modal = ({visible, onClose}) => {

    const handleOnClose = (e) => {
        if(e.target.id === 'container')onClose();
    }

    const handleOnClose1 = (e) => {
    onClose();
  }
    if(!visible){
        return null;
    }
  return (
    <>
        <div id='container' onClick={handleOnClose} className='fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center'>
        <Form handleOnClose={handleOnClose1}/>
        </div>
    </>
  )
}

export default Modal