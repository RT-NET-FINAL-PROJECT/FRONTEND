import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import { Link, useNavigate, useParams } from "react-router-dom";
import { baseUrl } from "../config/api";
import Swal from 'sweetalert2';

export default function DeletePostPage() {
  const { postId } = useParams();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const deleteHandler = (event) => {
    event.preventDefault();
    setLoading(true);
    fetch(`${baseUrl}event/${postId}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem("access_token"),
      },
    })
    .then((data) => {
      setLoading(false);
      Swal.fire({
        text: "Pos Informasi berhasil dihapus.",
        icon: "success",
        iconColor: 'rgba(59,7,11,255)',
        title: 'Penghapusan Pos Informasi Warga',
        showConfirmButton: false,
        timer: 1500,
      }).then((result) => {
          navigate("/");
      });
    })
    .catch((error) => {
      console.log(error);
      setLoading(false);
    });
  };
  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '70vh' }}>
      <div>
        <Card className="text-center" style={{ width: '25rem' }}>
          <Card.Header
            style={{
              fontSize: "20px",
              backgroundColor: 'rgba(59,7,11,255)',
              borderColor: 'rgba(59,7,11,255)',
              color: "white"
            }}
          >
            ! Peringatan
          </Card.Header>
          <Card.Body>
            <Card.Title>Apakah Anda yakin ingin menghapus informasi kegiatan ini?</Card.Title>
            <div className="d-flex gap-2 justify-content-center" style={{ marginTop: "50px" }}>
              <Button
                onClick={deleteHandler}
                style={{
                  backgroundColor: 'rgba(59,7,11,255)',
                  borderColor: 'rgba(59,7,11,255)',
                  width: "70px"
                }}
              >
                Ya
              </Button>
              <Link to={'/'}>
                <Button
                  style={{
                    backgroundColor: 'white',
                    borderColor: 'rgba(59,7,11,255)',
                    color: 'rgba(59,7,11,255)',
                    marginRight: '5px',
                    width: "70px"
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
