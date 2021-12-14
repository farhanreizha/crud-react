import React from "react";
import { Container } from "react-bootstrap";
import "../../App.css";

const NotFound = () => {

  return (
    <Container
      fluid
      className="text-white bg-danger d-flex justify-content-center align-items-center fst-italic"
      style={{ height: "100vh" }}
    >
      <h1 className="fw-bolder">404 Page Not Found</h1>
    </Container>
  );
};

export default NotFound;
