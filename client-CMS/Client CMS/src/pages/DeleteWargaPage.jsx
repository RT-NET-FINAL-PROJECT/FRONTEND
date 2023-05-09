import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Link, useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../config/api";


export default function DeleteWargaPage() {
  const { wargaId } = useParams();
  
  const navigate = useNavigate();

  const deleteHandler = (event) => {
    event.preventDefault();
    fetch(`${baseUrl}rt/users/${wargaId}`, {
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
        navigate("/warga");
      })
      .catch((error) => {
        console.log(error);
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
                <Card.Title>Apakah Anda yakin ingin menghapus data warga ini?</Card.Title>
                    <div className="d-flex gap-2 justify-content-center" style={{marginTop:"50px"}}>
                        <Button onClick={deleteHandler}
                          style={{
                            backgroundColor:'rgba(59,7,11,255)', 
                            borderColor:'rgba(59,7,11,255)',
                            width:"70px"
                          }}
                        >
                        Ya
                        </Button>
                        <Link to={'/warga'}>
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
  