import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addWarga } from "../store/action/actionCreator";
import { WARGAS_ADD_RESPONSE, WARGAS_ERROR } from "../store/action/actionType";
import MyModalsWrong from "../components/MyModalsWrong";
import Swal from 'sweetalert2';

export default function AddWargaPage() {

  const [wargaData, setWargaData] = useState({
    namaLengkap: "",
    nomorTelp: "",
    email: "",
    password: "",
    nomorKk: "",
    nomorKtp: "",
    status_keluarga: "",
    kkImg: "",
    ktpImg: "",
    photoUrl: "",
    aktaImg: "",
    agama: "",
    jenis_kelamin: "",
    status_perkawinan: "",
    pekerjaan: "",
    tempat_lahir: "",
    tanggal_lahir: ""
  });

  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const { wargaResponse, loading, errorMessage } = useSelector((state) => state.warga)
  const navigate = useNavigate();

  const wargaDataHandler = (event) => {
    const { name, value } = event.target;
    const obj = { ...wargaData, [name]: value };
    // console.log(obj);
    setWargaData(obj);
  };

  useEffect(() => {
    dispatch({ type: WARGAS_ADD_RESPONSE, payload: null })
    dispatch({ type: WARGAS_ERROR, payload: "" })
  }, [dispatch]);

  const submitNewWarga = async (event) => {
    event.preventDefault();

    try {
      await dispatch(addWarga(wargaData))
      Swal.fire({
        icon: 'success',
        iconColor: 'rgba(59,7,11,255)',
        title: 'Penambahan Data Warga',
        text: `Data warga berhasil ditambahkan!`,
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/warga');
    } catch (error) {
      console.log(error);
    }

  };

  // console.log(wargaResponse)
  useEffect(() => {
    if (wargaResponse) {
      navigate('/warga')
    }
  }, [navigate, wargaResponse])

  useEffect(() => {
    if (errorMessage) {
      setModalShow(true)
    }

    return () => dispatch({ type: WARGAS_ERROR, payload: "" })
  }, [errorMessage, dispatch])

  return (
    <Container style={{ marginTop: "100px", width: "500px", marginBottom: "50px" }}>
      <h1 style={{ color: 'rgba(59,7,11,255)', marginTop: "120px", fontSize: "35px", textAlign: "center", fontWeight: "bold" }}>Registrasi Data Warga</h1>
      <Form onSubmit={submitNewWarga} style={{ borderColor: 'rgba(59,7,11,255)', marginTop: "25px" }}>
        <Form.Group >
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "5px" }}>Nama Lengkap :</Form.Label>
          <Form.Control
            name="namaLengkap"
            type="text"
            placeholder="Nama Lengkap"
            onChange={wargaDataHandler}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Email :</Form.Label>
          <Form.Control
            name="email"
            type="text"
            placeholder="Email"
            onChange={wargaDataHandler}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Password :</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
            onChange={wargaDataHandler}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>NIK :</Form.Label>
          <Form.Control
            name="nomorKtp"
            type="number"
            placeholder="NIK"
            onChange={wargaDataHandler}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Nomor Kartu Keluarga :</Form.Label>
          <Form.Control
            name="nomorKk"
            type="number"
            onChange={wargaDataHandler}
            placeholder="Nomor Kartu Keluarga"
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Nomor Telepon :</Form.Label>
          <Form.Control
            name="nomorTelp"
            type="number"
            placeholder="Nomor Telepon"
            onChange={wargaDataHandler}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Jenis Kelamin :</Form.Label>
          <Form.Control
            name="jenis_kelamin"
            as="select"
            onChange={wargaDataHandler}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
          >
            <option selected disabled style={{ color: "grey" }}>--- Pilih jenis kelamin ---</option>
            <option value="Laki-Laki">Laki-Laki</option>
            <option value="Perempuan">Perempuan</option>
          </Form.Control>
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Tempat Lahir :</Form.Label>
          <Form.Control
            name="tempat_lahir"
            type="text"
            placeholder="Tempat Lahir"
            onChange={wargaDataHandler}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Tangal Lahir :</Form.Label>
          <Form.Control
            name="tanggal_lahir"
            type="date"
            placeholder="Tanggal Lahir"
            onChange={wargaDataHandler}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Status :</Form.Label>
          <Form.Control
            name="status_keluarga"
            as="select"
            onChange={wargaDataHandler}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
          >
            <option selected disabled style={{ color: "grey" }}>--- Pilih status di dalam keluarga ---</option>
            <option value="Kepala Keluarga">Kepala Keluarga</option>
            <option value="Anggota Keluarga">Anggota Keluarga</option>
          </Form.Control>
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Agama :</Form.Label>
          <Form.Control
            name="agama"
            type="text"
            placeholder="Agama"
            onChange={wargaDataHandler}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Status Perkawinan :</Form.Label>
          <Form.Control
            name="status_perkawinan"
            type="text"
            placeholder="Status Perkawinan"
            onChange={wargaDataHandler}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Pekerjaan :</Form.Label>
          <Form.Control
            name="pekerjaan"
            type="text"
            placeholder="Pekerjaan"
            onChange={wargaDataHandler}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
          />
        </Form.Group>
        <Link to={'/warga'}>
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
  );
}
