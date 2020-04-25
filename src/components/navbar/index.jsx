import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
export default() => {
  return (
    <Navbar bg="dark" variant="dark" expand='lg'>
      <Navbar.Brand href='#home'>News APIs</Navbar.Brand>
      <Navbar.Toggle aria-controls='basic-navbar-nav' />
      <Navbar.Collapse id='basic-navbar-nav'>
        <Nav className='ml-auto'>
          <Nav.Link href='/'>Home</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
