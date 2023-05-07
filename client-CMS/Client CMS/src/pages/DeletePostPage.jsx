import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";


export default function DeletePostPage() {

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{height : '70vh'}}>
        <div>
            <Card className="text-center" style={{width :'25rem'}}>
                <Card.Header
                style={{
                  fontSize:"20px", 
                  backgroundColor:'rgba(59,7,11,255)', 
                  borderColor:'rgba(59,7,11,255)', 
                  color:"white"
                }}
                >
                ! Peringatan
                </Card.Header>
                <Card.Body>
                <Card.Title>Apakah Anda yakin ingin menghapus informasi kegiatan ini?</Card.Title>
                    <div className="d-flex gap-2 justify-content-center" style={{marginTop:"50px"}}>
                        <Button 
                          style={{
                            backgroundColor:'rgba(59,7,11,255)', 
                            borderColor:'rgba(59,7,11,255)',
                            width:"70px"
                          }}
                        >
                        Ya
                        </Button>
                        <Link to={'/'}>
                            <Button
                              style={{
                                backgroundColor:'white', 
                                borderColor:'rgba(59,7,11,255)',
                                color:'rgba(59,7,11,255)',
                                marginRight:'5px',
                                width:"70px"
                              }} 
                            >
                            Tidak
                            </Button>
                          </Link>
                    </div>
                </Card.Body>
            </Card>
        </div>
    </Container>
  );
  }
  