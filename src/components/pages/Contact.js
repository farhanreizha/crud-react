import React from 'react'
import { Container } from 'react-bootstrap'
import NavbarComponen from '../NavbarComponen'

const Contact = () => {
  return (
    <Container
      fluid="true"
      className="py-md-5 px-md-5 bg-secondary text-white"
      style={{ height: "50vh" }}
    >
      <NavbarComponen />
      <h1>Contact</h1>
      <h3>Coming Soon</h3>
    </Container>
  );
}

export default Contact
