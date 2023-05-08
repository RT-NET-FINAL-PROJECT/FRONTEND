import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default function RegisterRTAdminPage() {

    return (
      <>
        <Container style={{ marginTop: "3%", marginBottom: "3%", width: "550px", backgroundColor: 'white', padding: "40px" }}>
            <h2 style={{ color: 'rgba(59,7,11,255)', textAlign: "center", marginTop: "10%", marginBottom: "7%", fontWeight: "bold" }}>Daftarkan Perangkat RT!</h2>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicNamaLengkap">
                    <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>Nama Lengkap :</Form.Label>
                    <Form.Control className="form-control placeholder-color"
                        type="text"
                        placeholder="Enter Nama Lengkap"
                        style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>Email :</Form.Label>
                    <Form.Control className="form-control placeholder-color"
                        type="email"
                        placeholder="Enter email"
                        style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
                    />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>Password :</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Enter password"
                        style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNIK">
                    <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>NIK :</Form.Label>
                    <Form.Control className="form-control placeholder-color"
                        type="number"
                        placeholder="Enter NIK"
                        style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
                    />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicNoTelp">
                    <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>Nomor Telepon :</Form.Label>
                    <Form.Control className="form-control placeholder-color"
                        type="number"
                        placeholder="Enter Phone Number"
                        style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>RT :</Form.Label>
                    <Form.Control
                        name="rt"
                        as="select"
                        style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
                    >
                        <option value="" style={{ color: "grey" }}>--- Pilih RT ---</option>
                        <option value="1">RT 1</option>
                        <option value="2">Rt 2</option>
                        <option value="3">Rt 3</option>
                    </Form.Control>
                </Form.Group>
                <Link to={'/'}>
                    <Button type="submit" style={{ marginTop:"30px", backgroundColor: "white", color: 'rgba(59,7,11,255)', fontWeight: "bold", borderColor: 'rgba(59,7,11,255)' }}>Back to Home
                    </Button>
                </Link>
                <Button type="submit" style={{ marginTop:"30px", backgroundColor: 'rgba(59,7,11,255)', color: "white", fontWeight: "bold", borderColor: 'rgba(59,7,11,255)', marginLeft: "10px" }}>Submit
                </Button>
            </Form>
        </Container>
     </>
    )
  }
  