import React from "react";
import { Form, Button, Row, Col, Container } from "react-bootstrap";

const Formulir = ({
  nama,
  jeniskelamin,
  alamat,
  handleChange,
  handleSubmit,
  id
}) => {
  return (
    <Container className="py-4">
      <Form onSubmit={handleSubmit}>
        <h1>{id ? "Edit Pasien" : "Tambah Pasien"}</h1>
        <hr />
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>Nama Pasien</Form.Label>
          <Form.Control
            type="text"
            name="nama"
            value={nama}
            placeholder="Nama Pasien"
            onChange={(event) => handleChange(event)}
            required
            validated="true"
          />
          <Form.Control.Feedback type="invalid">
            Nama Pasien harus di isi
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" value={jeniskelamin} required>
          <Form.Label>Jenis Kelamin</Form.Label>
          <Row>
            <Col xs="4" lg="2">
              <Form.Check
                type="radio"
                name="jeniskelamin"
                value="Laki-Laki"
                checked={jeniskelamin === "Laki-Laki"}
                onChange={handleChange}
                label="Laki-Laki"
              />
            </Col>
            <Col>
              <Form.Check
                type="radio"
                name="jeniskelamin"
                value="Perempuan"
                checked={jeniskelamin === "Perempuan"}
                onChange={handleChange}
                label="Perempuan"
              />
            </Col>
          </Row>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>Alamat</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name="alamat"
            value={alamat}
            onChange={(event) => handleChange(event)}
            required
            validated="true"
          />
          <Form.Control.Feedback type="invalid">
            Alamat harus di isi
          </Form.Control.Feedback>
        </Form.Group>
        <Button type="submit" variant="primary">
          Tambah
        </Button>
      </Form>
    </Container>
  );
};

export default Formulir;
