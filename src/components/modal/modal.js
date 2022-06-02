/** @format */

import React from 'react'
import './modal.css'

function Modal({ title, content, closeIcon = "X", onClick, openModal, setOpenModal }) {

  return (
    <div className='background'>
      <div className='container'>
        <div className='header'>
          <button
            className='btnHeader'
            onClick={onClick}
          >
            {closeIcon}
          </button>
        </div>
        <div className='title'>
          {title}
        </div>
        <div className='body'>
          {content}
        </div>
        <div className='footer'>
          <button
            className='btnFooter'
            id='crimsonBtn'
            onClick={onClick}
          >
            Back
          </button>
          <button
            className='btnFooter'
            id='blueBtn'
            onClick={onClick}
          >
            Ok
          </button>
        </div>
      </div>
    </div>
  )
}

export default Modal
