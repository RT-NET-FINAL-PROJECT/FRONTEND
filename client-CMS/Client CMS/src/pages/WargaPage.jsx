import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import WargaRow from "../components/WargaRow";

export default function WargaPage() {
  return (
    <Container style={{ marginTop: "100px" }}>
      <>
        <h1
          style={{
            color: "rgba(59,7,11,255)",
            marginTop: "120px",
            fontSize: "35px",
          }}
        >
          Data Warga RT X
        </h1>
        <div
          className="myButton"
          style={{ marginBottom: "5px", textAlign: "right" }}
        >
          <Button
            as={Link}
            to={"/warga/add"}
            style={{
              marginTop: "30px",
              backgroundColor: "rgba(59,7,11,255)",
              borderColor: "rgba(59,7,11,255)",
            }}
          >
            + Tambahkan Data Warga
          </Button>
        </div>
        <div style={{ overflowX: "auto" }}>
          <Table striped bordered hover style={{ marginTop: "20px", whiteSpace: "nowrap" }}>
            <thead style={{backgroundColor: "rgba(59,7,11,255)",  color:'white'}}>
              <tr>
                <th>No</th>
                <th>Nama Lengkap</th>
                <th>Foto</th>
                <th>NIK</th>
                <th>Status Akun</th>
                <th>Akun</th>
                <th>Aksi</th>
                <th>Jenis Kelamin</th>
                <th>Tempat Lahir</th>
                <th>Tanggal Lahir</th>
                <th>Nomor Telepon</th>
                <th>Email</th>
                <th>Agama</th>
                <th>Pekerjaan</th>
                <th>Status Perkawinan</th>
                <th>Status Keluarga</th>
                <th>KTP</th>
                <th>Akta</th>
                <th>Nomor Kartu Keluarga</th>
                <th>Kartu Keluarga</th>
              </tr>
            </thead>
            <tbody>
                <WargaRow />
                <WargaRow />
                <WargaRow />
                <WargaRow />
                <WargaRow />
                <WargaRow />
                <WargaRow />
                <WargaRow />
                <WargaRow />
                <WargaRow />
                <WargaRow />
                <WargaRow />
                <WargaRow />
                <WargaRow />
            </tbody>
          </Table>
        </div>
      </>
    </Container>
  );
}
