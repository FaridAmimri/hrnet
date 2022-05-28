/** @format */

import React from 'react'
import styled from 'styled-components'

function Modal({ title, content, crimsonbtn, bluebtn, link, closeIcon, closeModal }) {
  return (
    <ModalBackground className='modalBackground'>
      <ModalContainer className='modalContainer'>
        <ModalCloseBtn className='titleCloseBtn'>
          <button
            onClick={() => {
              closeModal(false)
            }}
          >
            {closeIcon}
          </button>
        </ModalCloseBtn>
        <ModalTitle className='title'>
          <h1>{title}</h1>
        </ModalTitle>
        <ModalBody className='body'>
          <p>{content}</p>
        </ModalBody>
        <ModalFooter className='footer'>
          <button
            id='crimsonBtn'
            onClick={() => {
              closeModal(false)
            }}
          >
            {crimsonbtn}
          </button>
          <button
            id='blueBtn'
            onClick={() => {
              closeModal(false)
            }}
          >
            <a href={link}>{bluebtn}</a>
          </button>
        </ModalFooter>
      </ModalContainer>
    </ModalBackground>
  )
}

export default Modal

const ModalBackground = styled.div`
  width: 100vw;
  height: 85vh;
  background-color: rgba(200, 200, 200);
  position: fixed;
  top: 86px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
`

const ModalContainer = styled.div`
  width: 500px;
  border-radius: 12px;
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  display: flex;
  flex-direction: column;
  padding: 25px;
`

const ModalTitle = styled.div`
  display: inline-block;
  text-align: center;
`

const ModalCloseBtn = styled.div`
  display: flex;
  justify-content: flex-end;
  button {
    background-color: transparent;
    border: none;
    font-size: 25px;
    cursor: pointer;
  }
`

const ModalBody = styled.div`
  display: inline-block;
  text-align: center;
  margin-bottom: 20px;
`

const ModalFooter = styled.div`
  flex: 20%;
  display: flex;
  justify-content: center;
  align-items: center;
  button {
    width: 150px;
    height: 45px;
    margin: 10px;
    border: none;
    color: white;
    border-radius: 8px;
    font-size: 20px;
    cursor: pointer;
    a {
      text-decoration-line: none;
      color: white;
    }
  }
  #crimsonBtn {
    background-color: crimson;
  }
  #blueBtn {
    background-color: cornflowerblue;
  }
`
