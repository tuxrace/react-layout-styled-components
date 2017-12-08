import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import Logo from './Logo'

const navbarInstance = () => (
  <Navbar fixedTop inverse collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Logo />        
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav pullRight={true}>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#"><strong>PROJECT NAME</strong></a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
)

export default navbarInstance
