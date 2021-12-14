import React, { Component } from "react";
import { Form, Row, Col } from "react-bootstrap";

export default class RadioButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gender: "",
    };
    this.change = this.change.bind(this);
  }

  change = (e) => {
    console.log(e.target.value);
  };

  render() {
    return (
      <Form.Group className="mb-3" onChange={this.change}>
        <Form.Label>Jenis Kelamin</Form.Label>
        <Row>
          <Col sm="2">
            <Form.Check
              type="radio"
              name="gender"
              value="Laki-laki"
              label="Laki-Laki"
            />
          </Col>
          <Col>
            <Form.Check
              type="radio"
              name="gender"
              value="Perempuan"
              label="Perempuan"
            />
          </Col>
        </Row>
        <p>{this.state.change}</p>
      </Form.Group>
    );
  }
}
