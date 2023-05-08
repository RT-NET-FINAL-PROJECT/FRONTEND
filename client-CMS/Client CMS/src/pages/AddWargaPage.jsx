import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default function AddWargaPage() {

    return (
      <Container style={{marginTop:"100px", width: "500px", marginBottom:"50px"}}>
        <h1 style={{color:'rgba(59,7,11,255)', marginTop: "120px", fontSize:"35px",textAlign:"center", fontWeight: "bold"}}>Registrasi Data Warga</h1>
        <Form style={{borderColor:'rgba(59,7,11,255)', marginTop: "25px"}}>
            <Form.Group >
              <Form.Label style={{color:'rgba(59,7,11,255)' , marginTop: "5px"}}>Nama Lengkap :</Form.Label>
              <Form.Control
                name="nama"
                type="text"
                placeholder="Nama Lengkap"
                style={{color:'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px"}}
                />
              <Form.Label style={{color:'rgba(59,7,11,255)', marginTop: "10px"}}>Email :</Form.Label>
              <Form.Control
                name="email"
                type="text"
                placeholder="Email"
                style={{color:'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px"}}
              />
              <Form.Label style={{color:'rgba(59,7,11,255)', marginTop: "10px"}}>Password :</Form.Label>
              <Form.Control
                name="biaya"
                type="text"
                placeholder="Password"
                style={{color:'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px"}}
              />
              <Form.Label style={{color:'rgba(59,7,11,255)', marginTop: "10px"}}>Nomor Telepon :</Form.Label>
              <Form.Control
                name="nomor telepon"
                type="number"
                placeholder="Nomor Telepon"
                style={{color:'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px"}}
                />
                <Form.Label style={{color:'rgba(59,7,11,255)', marginTop: "10px"}}>Jenis Kelamin :</Form.Label>
                <Form.Control
                  name="jenisKelamin"
                  as="select"
                  style={{color:'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px"}}
                >
                  <option value="" style={{color:"grey"}}>--- Pilih jenis kelamin ---</option>
                  <option value="Laki-Laki">Laki-Laki</option>
                  <option value="Perempuan">Perempuan</option>
                </Form.Control>
                <Form.Label style={{color:'rgba(59,7,11,255)', marginTop: "10px"}}>Tempat Lahir :</Form.Label>
                <Form.Control
                  name="tempatLahir"
                  type="text"
                  placeholder="Tempat Lahir"
                  style={{color:'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px"}}
                />
                <Form.Label style={{color:'rgba(59,7,11,255)', marginTop: "10px"}}>Tangal Lahir :</Form.Label>
                <Form.Control
                  name="tangalLahir"
                  type="date"
                  placeholder="Tangal Lahir"
                  style={{color:'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px"}}
                />
                <Form.Label style={{color:'rgba(59,7,11,255)', marginTop: "10px"}}>NIK :</Form.Label>
              <Form.Control
                name="nik"
                type="number"
                placeholder="NIK"
                style={{color:'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px"}}
              />
              <Form.Label style={{color:'rgba(59,7,11,255)', marginTop: "10px"}}>Nomor Kartu Keluarga :</Form.Label>
              <Form.Control
                name="kk"
                type="number"
                placeholder="Nomor Kartu Keluarga"
                style={{color:'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px"}}
                />
              <Form.Label style={{color:'rgba(59,7,11,255)', marginTop: "10px"}}>Status :</Form.Label>
              <Form.Control
                name="statusKeluarga"
                as="select"
                style={{color:'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px"}}
              >
                <option value="" style={{color:"grey"}}>--- Pilih status di dalam keluarga ---</option>
                <option value="Kepala Keluarga">Kepala Keluarga</option>
                <option value="Anggota Keluarga">Anggota Keluarga</option>
              </Form.Control>
              <Form.Label style={{color:'rgba(59,7,11,255)', marginTop: "10px"}}>Agama :</Form.Label>
              <Form.Control
                name="agama"
                type="text"
                placeholder="Agama"
                style={{color:'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px"}}
              />
              <Form.Label style={{color:'rgba(59,7,11,255)', marginTop: "10px"}}>Status Perkawinan :</Form.Label>
              <Form.Control
                name="statusPerkawinan"
                type="text"
                placeholder="Status Perkawinan"
                style={{color:'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px"}}
              />
              <Form.Label style={{color:'rgba(59,7,11,255)', marginTop: "10px"}}>Pekerjaan :</Form.Label>
              <Form.Control
                name="pekerjaan"
                type="text"
                placeholder="Pekerjaan"
                style={{color:'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px"}}
              />
            </Form.Group>
            <Link to={'/warga'}>
            <Button
              style={{
                marginTop: "30px",
                backgroundColor:'white', 
                borderColor:'rgba(59,7,11,255)',
                color:'rgba(59,7,11,255)',
                marginRight:'10px',
              }} 
            >
            Batalkan
            </Button>
          </Link>  
          <Button 
            style={{
              marginTop: "30px",
              backgroundColor:'rgba(59,7,11,255)', 
              borderColor:'rgba(59,7,11,255)'
            }} 
            type="submit"
          >
            Tambahkan
          </Button>
        </Form>
      </Container>
    );
  }
  