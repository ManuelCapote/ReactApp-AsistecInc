import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'

function Header() {
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
      <div className='container'>
        <Navbar className='nav-box' bg='dark' variant='dark' expand='lg'>
          <Navbar.Brand className='NavLogoBox h1' href='#home'>
            Asistec Inc
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ml-auto'>
              <Nav.Link className='navLi' href='#about'>
                About
              </Nav.Link>
              <Nav.Link className='navLi' href='#services'>
                Services
              </Nav.Link>
              <Nav.Link className='navLi' href='#contact'>
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    </Navbar>
  )
}

export default Header
