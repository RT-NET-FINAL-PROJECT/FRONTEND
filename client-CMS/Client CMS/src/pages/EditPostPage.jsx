import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

export default function EditPostPage() {

  return (
    <Container className="w-50" style={{marginTop:"100px"}}>
      <h1 style={{color:'rgba(59,7,11,255)', fontWeight: "bold", marginTop: "120px", fontSize:"35px", textAlign:"center"}}>Ubah Informasi Kegiatan "Nama Kegiatan" di RT X</h1>
      <Form style={{borderColor:'rgba(59,7,11,255)', marginTop: "25px"}}>
          <Form.Group >
            <Form.Label style={{color:'rgba(59,7,11,255)' , marginTop: "5px"}}>Nama Kegiatan</Form.Label>
            <Form.Control
              name="nama"
              type="text"
              placeholder="Nama Kegiatan"
              style={{color:'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "5px"}}
            />
            <Form.Label style={{color:'rgba(59,7,11,255)', marginTop: "10px"}}>Deskripsi Kegiatan</Form.Label>
            <Form.Control
              name="deskripsi"
              as="textarea"
              rows={8}
              style={{color:'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "5px"}}
            />
            <Form.Label style={{color:'rgba(59,7,11,255)', marginTop: "10px"}}>Kategori Kegiatan</Form.Label>
            <Form.Control
              name="kategori"
              type="text"
              placeholder="Kategori Kegiatan"
              style={{color:'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "5px"}}
            />
            <Form.Label style={{color:'rgba(59,7,11,255)', marginTop: "10px"}}>Lokasi Kegiatan</Form.Label>
            <Form.Control
              name="lokasi"
              type="text"
              placeholder="Lokasi Kegiatan"
              style={{color:'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "5px"}}
            />
            <Form.Label style={{color:'rgba(59,7,11,255)', marginTop: "10px"}}>Biaya Iuran Kegiatan</Form.Label>
            <Form.Control
              name="biaya"
              type="text"
              placeholder="Biaya Iuran Kegiatan"
              style={{color:'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "5px"}}
            />
          </Form.Group>
          <Link to={'/'}>
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
          Ubahkan
        </Button>
      </Form>
    </Container>
  );
  }
  