import React from "react";
import NavbarComponen from "../NavbarComponen";
import Container from "react-bootstrap/Container";

const About = () => {
  return (
    <Container
      fluid
      className=" bg-secondary text-white"
      style={{ height: "100vh" }}
    >
      <NavbarComponen />

      <div className="px-4 px-md-5 mx-md-4 content">
        <h1>About</h1>
        <h3>Coming Soon</h3>
      </div>
    </Container>
  );
};

export default About;
