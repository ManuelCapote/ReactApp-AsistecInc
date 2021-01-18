import React, { useEffect, useState, handleClose } from 'react'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Button from 'react-bootstrap/Button'
import ModalContact from './modalContact.js'
import ModalHeader from 'react-bootstrap/ModalHeader'
import ModalTitle from 'react-bootstrap/ModalTitle'
import ModalBody from 'react-bootstrap/ModalBody'
import ModalFooter from 'react-bootstrap/ModalFooter'
import ModalDialog from 'react-bootstrap/ModalDialog'
import Modal from 'react-bootstrap/Modal'
import About from './About.js'

function Main() {
  return (
    <div>
      <Jumbotron className='jumbotron-box'>
        <div className='container containerDiv'>
          <h1 className='pt-5'>ASISTEC</h1>
          <blockquote>INCORPORATED</blockquote>
          <br />
          <p className='heroP'>
            Need to request our services? Send us a message with your inquire
          </p>
          <ModalContact />
        </div>
      </Jumbotron>
      <About />
    </div>
  )
}

export default Main
