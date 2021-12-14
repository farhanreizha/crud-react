import React, { Component } from "react";
import { Col, Container, Row } from "react-bootstrap";
import "../../App.css";
import Formulir from "../Form";
import NavbarComponen from "../NavbarComponen";
import Tabel from "../Tabel";

export default class MainLayout extends Component {
  // state
  constructor(props) {
    super(props);
    this.state = {
      pasien: [],
      nama: "",
      jeniskelamin: "Laki-Laki",
      alamat: "",
      id: "",
    };
  }
  // endState
  // ----------------------------------------------------------------------------
  // handleChange
  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  // endHandleChange
  // ----------------------------------------------------------------------------
  // handleSubmit
  handleSubmit = (event) => {
    event.preventDefault();
    // logicAddData
    if (this.state.id === "") {
      // ambil data dari state
      this.setState({
        pasien: [
          ...this.state.pasien,
          {
            id: this.state.pasien.length + 1,
            nama: this.state.nama,
            jeniskelamin: this.state.jeniskelamin,
            alamat: this.state.alamat,
          },
        ],
      });
      // endAmbilData
      // ----------------------------------------------------------------------------
    } else {
      // Data yang tidak di pilih
      const pasienTidakDipilih = this.state.pasien
        // filter data yang tidak dipilih
        .filter((pasien) => pasien.id !== this.state.id)
        .map((filterPasien) => {
          return filterPasien;
        });
      // endFilterData
      // ----------------------------------------------------------------------------
      // set state data yang di tidak pilih
      this.setState({
        pasien: [
          ...pasienTidakDipilih,
          {
            id: this.state.pasien.length + 1,
            nama: this.state.nama,
            jeniskelamin: this.state.jeniskelamin,
            alamat: this.state.alamat,
          },
        ],
      }); // endStateData
      // endData yang tidak dipilih
    }
    // endLogicAddData
    // ----------------------------------------------------------------------------
    // state reset
    this.setState({
      nama: "",
      jeniskelamin: "Laki-Laki",
      alamat: "",
      id: "",
    });
    // endStateReset
  };
  // endHandleSubmit
  // ----------------------------------------------------------------------------
  // editData
  editData = (id) => {
    // ambil data yang akan di edit
    const pasienEdit = this.state.pasien
      .filter((pasien) => pasien.id === id)
      .map((filterPasien) => {
        return filterPasien;
      });
    // endAmbilData
    // ----------------------------------------------------------------------------
    // set state data yang akan di edit
    this.setState({
      nama: pasienEdit[0].nama,
      jeniskelamin: pasienEdit[0].jeniskelamin,
      alamat: pasienEdit[0].alamat,
      id: pasienEdit[0].id,
    }); // endsetStateDataEdit
  };
  // endEditData
  // ----------------------------------------------------------------------------
  // hapusData
  hapusData = (id) => {
    // filter data yang dihapus dan tmabah data baru
    const pasienBaru = this.state.pasien
      .filter((pasien) => pasien.id !== id)
      .map((filterPasien) => {
        return filterPasien;
      });
    // endFilterData
    // ----------------------------------------------------------------------------
    // set state data yang dihapus
    this.setState({
      pasien: pasienBaru,
    }); // endsetStateDataHapus
  };
  // endHapusData
  // ----------------------------------------------------------------------------
  // render
  render() {
    return (
      <Container
        fluid
        className="bg-secondary text-white"
        style={{ height: "100vh" }}
      >
        <NavbarComponen />
        <Row className="justify-content-center">
          <Col md={5}>
            <Formulir
              {...this.state}
              handleChange={this.handleChange}
              handleSubmit={this.handleSubmit}
            />
          </Col>
          <Col md={{ span: 5, offset: 1 }} className="">
            <Tabel
              pasien={this.state.pasien}
              editData={this.editData}
              hapusData={this.hapusData}
            />
          </Col>
        </Row>
      </Container>
    );
  }
  // endRender
}
