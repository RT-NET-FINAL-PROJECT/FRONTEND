import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailService, updateService, fetchWargas } from "../store/action/actionCreator";
import { SERVICES_ERROR, SERVICES_UPDATE } from "../store/action/actionType";
import MyModalsWrong from "../components/MyModalsWrong"

export default function EditLayananPage() {
  const { layananId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(() => dispatch(fetchDetailService(layananId)), [dispatch, layananId])
  const [modalShow, setModalShow] = useState(false);
  const { serviceDetail, loadingStatus, errorMessage, updateStatus } = useSelector((state) => state.service)

  const { wargas } = useSelector(
    (state) => state.warga
  );
  const [name, setName] = useState(() => "")
  const [deskripsi, setDeskripsi] = useState(() => "")
  const [dokumen_pendukung, setDokumenPendukung] = useState(() => "")

  useEffect(() => dispatch(fetchWargas()), [dispatch]);

  useEffect(() => {
    if (serviceDetail) {
      setName(serviceDetail.name)
      setDeskripsi(serviceDetail.deskripsi)
      setDokumenPendukung(serviceDetail.dokumen_pendukung)
    }
  }, [serviceDetail])

  const editService = (e) => {
    e.preventDefault();
    const objToSend = {
      name,
      deskripsi,
      dokumen_pendukung
    };

    dispatch(updateService(objToSend, layananId))
  };
  // console.log(updateStatus)
  useEffect(() => {
    if (updateStatus) {
      navigate('/layanan')
    }

    return () => dispatch({ type: SERVICES_UPDATE, payload: null })
  }, [updateStatus, navigate, dispatch])

  useEffect(() => {
    if (errorMessage) {
      setModalShow(true)
    }

    return () => dispatch({ type: SERVICES_ERROR, payload: "" })
  }, [errorMessage, dispatch])

  return (
    <Container className="w-50" style={{ marginTop: "100px" }}>
      <h1 style={{ color: 'rgba(59,7,11,255)', fontWeight: "bold", fontSize: "35px", textAlign: "center" }}>RT {wargas.rt}/RW {wargas.rw} Kel. {wargas.kelurahan}</h1>
      <h1 style={{ color: 'rgba(59,7,11,255)', fontWeight: "bold", marginTop: "80px", fontSize: "35px", textAlign: "center" }}>Ubah Info Layanan</h1>
      <Form onSubmit={editService} style={{ borderColor: 'rgba(59,7,11,255)', marginTop: "25px" }}>
        <Form.Group >
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "5px" }}>Nama Layanan:</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Nama Layanan"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "5px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Deskripsi Layanan:</Form.Label>
          <Form.Control
            name="deskripsi"
            as="textarea"
            rows={8}
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "5px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Link Dokumen Pendukung:</Form.Label>
          <Form.Control
            name="dokumen_pendukung"
            type="text"
            placeholder="Link Dokumen Pendukung"
            value={dokumen_pendukung}
            onChange={(e) => setDokumenPendukung(e.target.value)}
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
          Ubahkan
        </Button>
      </Form>
      {modalShow && (
        <MyModalsWrong show={modalShow} onHide={() => setModalShow(false)} title='Warning!' content='All fields must be filled' />
      )}
    </Container>
  )
}
