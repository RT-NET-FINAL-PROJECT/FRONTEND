import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addService, fetchWargas } from "../store/action/actionCreator";
import { SERVICES_ADD_RESPONSE, SERVICES_ERROR } from "../store/action/actionType";
import MyModalsWrong from "../components/MyModalsWrong";
import Swal from 'sweetalert2';

export default function AddLayananPage() {

  const [serviceData, setServiceData] = useState({
    name: "",
    deskripsi: "",
    dokumen_pendukung: ""
  });
  
  const { wargas } = useSelector(
    (state) => state.warga
  );

  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const { serviceResponse, loading, errorMessage } = useSelector((state) => state.service)
  const navigate = useNavigate();

  const serviceDataHandler = (event) => {
    const { name, value } = event.target;
    const obj = { ...serviceData, [name]: value };
    // console.log(obj);
    setServiceData(obj);
  };
  
  useEffect(() => dispatch(fetchWargas()), [dispatch]);

  useEffect(() => {
    dispatch({ type: SERVICES_ADD_RESPONSE, payload: null })
    dispatch({ type: SERVICES_ERROR, payload: "" })
  }, [dispatch]);

  const submitNewService = async (event) => {
    event.preventDefault();

    try {
      await dispatch(addService(serviceData));
      Swal.fire({
        icon: 'success',
        iconColor: 'rgba(59,7,11,255)',
        title: 'Penambahan Informasi',
        text: `Informasi layanan berhasil ditambahkan!`,
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/layanan');
    } catch (error) {
      console.log(error);
    }

  };

  // console.log(serviceResponse)
  useEffect(() => {
    if (serviceResponse) {
      navigate('/layanan')
    }
  }, [navigate, serviceResponse])

  useEffect(() => {
    if (errorMessage) {
      setModalShow(true)
    }

    return () => dispatch({ type: SERVICES_ERROR, payload: "" })
  }, [errorMessage, dispatch])

  return (
    <Container className="w-50" style={{ marginTop: "100px" }}>
    <h1 style={{ color: 'rgba(59,7,11,255)', fontWeight: "bold", fontSize: "35px", textAlign: "center" }}>RT {wargas.rt}/RW {wargas.rw} Kel. {wargas.kelurahan}</h1>
      <h1 style={{ color: 'rgba(59,7,11,255)', fontWeight: "bold", marginTop: "80px", fontSize: "35px", textAlign: "center" }}>Tambahkan Layanan RT</h1>
      <Form onSubmit={submitNewService} style={{ borderColor: 'rgba(59,7,11,255)', marginTop: "25px" }}>
        <Form.Group >
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "5px" }}>Nama Layanan:</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Nama Layanan"
            onChange={serviceDataHandler}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "5px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Deskripsi Layanan:</Form.Label>
          <Form.Control
            name="deskripsi"
            as="textarea"
            rows={8}
            onChange={serviceDataHandler}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "5px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Link Dokumen Pendukung:</Form.Label>
          <Form.Control
            name="dokumen_pendukung"
            type="text"
            placeholder="Link Dokumen Pendukung"
            onChange={serviceDataHandler}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "5px" }}
          />
        </Form.Group>
        <Link to={'/layanan'}>
          <Button
            style={{
              marginTop: "30px",
              backgroundColor: 'white',
              borderColor: 'rgba(59,7,11,255)',
              color: 'rgba(59,7,11,255)',
              marginRight: '10px',
            }}
          >
            Batalkan
          </Button>
        </Link>
        <Button
          style={{
            marginTop: "30px",
            backgroundColor: 'rgba(59,7,11,255)',
            borderColor: 'rgba(59,7,11,255)'
          }}
          type="submit"
        >
          Tambahkan
        </Button>
      </Form>
      {modalShow && (
        <MyModalsWrong show={modalShow} onHide={() => setModalShow(false)} title='Peringatan!' content='Periksa kembali, semua kolom harus diisi!' />
      )}
    </Container>
  )
}
