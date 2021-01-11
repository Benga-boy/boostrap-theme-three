import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'
import { Collapse, Container, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem } from 'reactstrap'

const NavbarTop = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)



  return (
    <Fragment>
      {/* <section>
        <Jumbotron fluid className="navTop bg-primary">
          <Container>
            <div className="d-flex justify-content-end">
              <p>Number</p>
              <p className="ml-3">Email</p>
            </div>
          </Container>
        </Jumbotron>
      </section> */}
      <Navbar expand="sm" dark={true} color="dark" className="mt-0">
        <Container>
          <NavbarBrand>Glozzom</NavbarBrand>
          <NavbarToggler onClick={toggle}/>
          <Collapse isOpen={isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link to="/" className="nav-link">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/about" className="nav-link">About Us</Link>
              </NavItem>
              <NavItem>
                <Link to="/services" className="nav-link">Services</Link>
              </NavItem>
              <NavItem>
                <Link to="/blog" className="nav-link">Blog</Link>
              </NavItem>
              <NavItem>
                <Link to="/contact" className="nav-link">Contact</Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </Fragment>
  )
}

export default NavbarTop
