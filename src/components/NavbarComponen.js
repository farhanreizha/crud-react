import React from "react";
import Logo from '../logo.svg';
import { Container, Nav, Navbar } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

const NavbarComponen = () => {
  return (
    <Container fluid={true} className="px-md-5 text-white justify-item-center">
      <Nav defaultActiveKey="/" as="ul">
        <LinkContainer to="/" className="text-white">
          <Navbar.Brand className="">
            <img src={Logo} alt="myLogo" height="90" />
          </Navbar.Brand>
        </LinkContainer>
        <Nav.Item as="li">
          <LinkContainer to="/" className="text-white">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item as="li">
          <LinkContainer to="/About" className="text-white">
            <Nav.Link>About</Nav.Link>
          </LinkContainer>
        </Nav.Item>
        <Nav.Item as="li">
          <LinkContainer to="/Contact" className="text-white">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>
        </Nav.Item>
      </Nav>
    </Container>
  );
};

export default NavbarComponen;
