import React from 'react'
import './LandingPage.css'
import { Button, Container, Row } from 'react-bootstrap'

const LandingPage = () => {
  return (
    <div className='main'>
      <Container>
        <Row>
          <div className='intro-text'>
            <div>
              <h1 className='title'>Welcome to NoteZipper</h1>
              <p className='sub-title'>One safe place for all your notes.</p>
            </div>

            <div className='button-container'>
              <a href='/login'>
                <Button size='lg' className='landing-button'>
                  Login
                </Button>
              </a>
              <a href='/signup'>
                <Button size='lg' className='landing-button' variant='outline-primary'>
                  Signup
                </Button>
              </a>
            </div>
          </div>
        </Row>
      </Container>
    </div>
  )
}

export default LandingPage