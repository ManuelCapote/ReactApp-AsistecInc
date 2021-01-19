import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'
import CardDeck from 'react-bootstrap/CardDeck'
import CardGroup from 'react-bootstrap/CardGroup'
import CardColumns from 'react-bootstrap/CardColumns'
import ListGroup from 'react-bootstrap/ListGroup'
import ListGroupItem from 'react-bootstrap/ListGroupItem'
import Card from 'react-bootstrap/Card'

function Services() {
  return (
    <div id='services' className='container servicesBox'>
      <h1 className='text-center'>Services</h1>
      <div className='servicesBoxCard'>
        <Card className='serviceCard' style={{ width: '18rem' }}>
          <Card.Img
            variant='top'
            className='imgS1'
            src='https://images.unsplash.com/photo-1601462904263-f2fa0c851cb9?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=584&q=80'
          />
          <Card.Body>
            <Card.Title>Electrical Rooms</Card.Title>
            <Card.Text>
              Short description about what we do with Electrical Rooms
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='serviceCard' style={{ width: '18rem' }}>
          <Card.Img
            variant='top'
            className='imgS2'
            src='https://images.unsplash.com/photo-1595856619767-ab739fa7daae?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
          />
          <Card.Body>
            <Card.Title>Electrical Code Update</Card.Title>
            <Card.Text>
              Short description about what we do with Electrical Rooms
            </Card.Text>
          </Card.Body>
        </Card>
        <Card className='serviceCard' style={{ width: '18rem' }}>
          <Card.Img
            variant='top'
            className='imgS3'
            src='https://images.unsplash.com/photo-1503387837-b154d5074bd2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1189&q=80'
          />
          <Card.Body>
            <Card.Title>Electrical Remodeling</Card.Title>
            <Card.Text>
              Short description about what we do with Electrical Rooms
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  )
}

export default Services
