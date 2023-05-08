import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default function RegisterRTBaruPage() {
  return (
    <>
      <Container style={{ marginTop: "3%", marginBottom: "3%", width: "550px", backgroundColor: 'white', padding: "40px" }}>
        <h2 style={{ color: 'rgba(59,7,11,255)', textAlign: "center", marginTop: "10%", marginBottom: "7%", fontWeight: "bold" }}>Daftarkan RT Baru!</h2>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicNamaLengkap">
            <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>Nama Lengkap Ketua RT:</Form.Label>
            <Form.Control className="form-control placeholder-color"
              type="text"
              placeholder="Enter Nama Lengkap"
              style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicNIK">
            <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>NIK Ketua RT:</Form.Label>
            <Form.Control className="form-control placeholder-color"
              type="number"
              placeholder="Enter NIK"
              style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRT">
            <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>RT :</Form.Label>
            <Form.Control className="form-control placeholder-color"
              type="number"
              placeholder="Enter RT"
              style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicRW">
            <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>RW :</Form.Label>
            <Form.Control className="form-control placeholder-color"
              type="number"
              placeholder="Enter RW"
              style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicKelurahan">
            <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>Kelurahan :</Form.Label>
            <Form.Control className="form-control placeholder-color"
              type="text"
              placeholder="Enter Kelurahan"
              style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicKecamatan">
            <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>Kecamatan :</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Kecamatan"
              style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicKabupaten">
            <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>Kabupaten :</Form.Label>
            <Form.Control className="form-control placeholder-color"
              type="text"
              placeholder="Enter Kabupaten"
              style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicProvinsi">
            <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>Provinsi :</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Provinsi"
              style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
            />
          </Form.Group>
          <Link to={'/'}>
            <Button type="submit" style={{ marginTop: "20px", backgroundColor: "white", color: 'rgba(59,7,11,255)', fontWeight: "bold", borderColor: 'rgba(59,7,11,255)' }}>Back to Home
            </Button>
          </Link>
          <Button type="submit" style={{ marginTop: "20px", backgroundColor: 'rgba(59,7,11,255)', color: "white", fontWeight: "bold", borderColor: 'rgba(59,7,11,255)', marginLeft: "10px" }}>Submit
          </Button>
        </Form>
      </Container>
    </>
  )
}
