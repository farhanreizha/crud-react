import React from "react";
import { Container, Table, Button } from "react-bootstrap";

const Tabel = ({ pasien, editData, hapusData }) => {
  return (
    <Container className="text-center">
      <h1 className="pb-2">Data Pasien</h1>
      <Table striped bordered hover>
        <thead className="text-white">
          <tr>
            <th>#</th>
            <th>Nama Pasien</th>
            <th>Jenis Kelamin</th>
            <th>Alamat</th>
            <th>Aksi</th>
          </tr>
        </thead>
        <tbody className="text-white">
          {pasien.map((pasien, index) => {
            return (
              <tr key={index}>
                <td className="text-white">{index + 1}</td>
                <td className="text-white">{pasien.nama} </td>
                <td className="text-white">{pasien.jeniskelamin}</td>
                <td className="text-white">{pasien.alamat}</td>
                <td className="text-white">
                  <Button
                    className="btn m-2"
                    variant="warning"
                    onClick={() => editData(pasien.id)}
                  >
                    Edit
                  </Button>
                  <Button variant="danger" onClick={() => hapusData(pasien.id)}>
                    hapus
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </Container>
  );
};

export default Tabel;
