import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Link, useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../config/api";
import Swal from 'sweetalert2';

export default function DeleteRequestPage() {
  const { requestId } = useParams();
  
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  const deleteHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    fetch(`${baseUrl}submissions/${requestId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("something is wrong");
        }
      })
      .then((data) => {
        setLoading(false);
        Swal.fire({
          text: "Data request warga berhasil dihapus.",
          icon: "success",
          iconColor: 'rgba(59,7,11,255)',
          title: 'Penghapusan Data Request Warga',
          showConfirmButton: false,
          timer: 1500,
        }).then((result) => {
            navigate("/request");
        });
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  };
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
                <Card.Title>Apakah Anda yakin ingin menghapus request ini?</Card.Title>
                    <div className="d-flex gap-2 justify-content-center" style={{marginTop:"50px"}}>
                        <Button onClick={deleteHandler}
                          style={{
                            backgroundColor:'rgba(59,7,11,255)', 
                            borderColor:'rgba(59,7,11,255)',
                            width:"70px",
                          }}
                        >
                        Ya
                        </Button>
                        <Link to={'/request'}>
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
  