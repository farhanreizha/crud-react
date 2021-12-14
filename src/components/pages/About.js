import React from 'react'
import NavbarComponen from '../NavbarComponen'
import Container from 'react-bootstrap/Container'

const About = () => {
  return (
    <Container
          fluid="true"
          className="py-md-5 px-md-5 bg-secondary text-white"
          style={{ height: "50vh" }}
        >
      <NavbarComponen />
      <h1>About</h1>
      <h3>Coming Soon</h3>
    </Container>
  )
}

export default About
