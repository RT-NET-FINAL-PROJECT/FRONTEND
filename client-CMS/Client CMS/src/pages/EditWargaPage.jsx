import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailWarga, updateWarga } from "../store/action/actionCreator";
import { WARGAS_ERROR, WARGAS_UPDATE } from "../store/action/actionType";
import MyModalsWrong from "../components/MyModalsWrong"
import Swal from 'sweetalert2';

export default function EditWargaPage() {
  const { wargaId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(() => dispatch(fetchDetailWarga(wargaId)), [dispatch, wargaId])
  const [modalShow, setModalShow] = useState(false);
  const { wargaDetail, loadingStatus, errorMessage, updateStatus } = useSelector((state) => state.warga)

  const [namaLengkap, setNamaLengkap] = useState(() => "") 
  const [nomorTelp, setNomorTelp] = useState(() => "")
  const [email, setEmail] = useState(() => "")
  const [nomorKk, setNomorKk] = useState(() => "")
  const [nomorKtp, setNomorKtp] = useState(() => "")
  const [status_keluarga, setStatusKeluarga] = useState(() => "")
  const [kkImg, setKkImg] = useState(() => "")
  const [ktpImg, setKtpImg] = useState(() => "")
  const [photoUrl, setPhotoUrl] = useState(() => "")
  const [aktaImg, setAktaImg] = useState(() => "")
  const [agama, setAgama] = useState(() => "")
  const [jenis_kelamin, setJenisKelamin] = useState(() => "")
  const [status_perkawinan, setStatusPerkawinan] = useState(() => "")
  const [pekerjaan, setPekerjaan] = useState(() => "")
  const [tempat_lahir, setTempatLahir] = useState(() => "")
  const [tanggal_lahir, setTanggalLahir] = useState(() => "")


  // const dispatch = useDispatch()

  useEffect(() => {
    if (wargaDetail) {
      setNamaLengkap(wargaDetail.namaLengkap)
      setNomorTelp(wargaDetail.nomorTelp)
      setEmail(wargaDetail.email)
      setNomorKk(wargaDetail.nomorKk)
      setNomorKtp(wargaDetail.nomorKtp)
      setStatusKeluarga(wargaDetail.status_keluarga)
      setKkImg(wargaDetail.kkImg)
      setKtpImg(wargaDetail.ktpImg)
      setPhotoUrl(wargaDetail.photoUrl)
      setAktaImg(wargaDetail.aktaImg)
      setAgama(wargaDetail.agama)
      setJenisKelamin(wargaDetail.jenis_kelamin)
      setStatusPerkawinan(wargaDetail.status_perkawinan)
      setPekerjaan(wargaDetail.pekerjaan)
      setTempatLahir(wargaDetail.tempat_lahir)
      setTanggalLahir(wargaDetail.tanggal_lahir)
    }
  }, [wargaDetail])

  const editWarga = (e) => {
    e.preventDefault();
    const objToSend = {
      namaLengkap,
      nomorTelp,
      email,
      nomorKk,
      nomorKtp,
      status_keluarga,
      kkImg,
      ktpImg,
      photoUrl,
      aktaImg,
      agama,
      jenis_kelamin,
      status_perkawinan,
      pekerjaan,
      tempat_lahir,
      tanggal_lahir
    };

    dispatch(updateWarga(objToSend, wargaId))
  };
  // console.log(updateStatus)
  useEffect(() => {
    if (updateStatus) {
      Swal.fire({
        icon: "success",
        title: "Berhasil Data Warga",
        iconColor: 'rgba(59,7,11,255)',
        text: "Data Warga telah berhasil diubah!",
        showConfirmButton: false,
        timer: 1500
      });
      navigate(`/warga/detail/${wargaId}`)
    }

    return () => dispatch({ type: WARGAS_UPDATE, payload: null })
  }, [updateStatus, navigate, dispatch])

  useEffect(() => {
    if (errorMessage) {
      setModalShow(true)
    }

    return () => dispatch({ type: WARGAS_ERROR, payload: "" })
  }, [errorMessage, dispatch])

  return (
    <Container style={{ marginTop: "100px", width: "500px", marginBottom: "50px" }}>
      <h1 style={{ color: 'rgba(59,7,11,255)', marginTop: "120px", fontSize: "35px", fontWeight: "bold", textAlign: "center" }}>Ubah Data Warga</h1>
      <Form onSubmit={editWarga} style={{ borderColor: 'rgba(59,7,11,255)', marginTop: "25px" }}>
        <Form.Group >
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "5px" }}>Nama Lengkap :</Form.Label>
          <Form.Control
            name="namaLengkap"
            type="text"
            placeholder="Nama Lengkap"
            value={namaLengkap}
            onChange={(e) => setNamaLengkap(e.target.value)}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Email :</Form.Label>
          <Form.Control
            name="email"
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>NIK :</Form.Label>
          <Form.Control
            name="nomorKtp"
            type="number"
            placeholder="NIK"
            value={nomorKtp}
            onChange={(e) => setNomorKtp(e.target.value)}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Nomor Kartu Keluarga :</Form.Label>
          <Form.Control
            name="nomorKk"
            type="number"
            value={nomorKk}
            onChange={(e) => setNomorKk(e.target.value)}
            placeholder="Nomor Kartu Keluarga"
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Nomor Telepon :</Form.Label>
          <Form.Control
            name="nomorTelp"
            type="number"
            placeholder="Nomor Telepon"
            value={nomorTelp}
            onChange={(e) => setNomorTelp(e.target.value)}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Jenis Kelamin :</Form.Label>
          <Form.Control
            name="jenis_kelamin"
            as="select"
            value={jenis_kelamin}
            onChange={(e) => setJenisKelamin(e.target.value)}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
          >
            <option value="" style={{ color: "grey" }}>--- Pilih jenis kelamin ---</option>
            <option value="Laki-Laki">Laki-Laki</option>
            <option value="Perempuan">Perempuan</option>
          </Form.Control>
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Tempat Lahir :</Form.Label>
          <Form.Control
            name="tempat_lahir"
            type="text"
            placeholder="Tempat Lahir"
            value={tempat_lahir}
            onChange={(e) => setTempatLahir(e.target.value)}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Tangal Lahir :</Form.Label>
          <Form.Control
            name="tanggal_lahir"
            type="date"
            placeholder="Tanggal Lahir"
            value={tanggal_lahir}
            onChange={(e) => setTanggalLahir(e.target.value)}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Status :</Form.Label>
          <Form.Control
            name="status_keluarga"
            as="select"
            value={status_keluarga}
            onChange={(e) => setStatusKeluarga(e.target.value)}
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
            value={agama}
            onChange={(e) => setAgama(e.target.value)}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Status Perkawinan :</Form.Label>
          <Form.Control
            name="status_perkawinan"
            type="text"
            placeholder="Status Perkawinan"
            value={status_perkawinan}
            onChange={(e) => setStatusPerkawinan(e.target.value)}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Pekerjaan :</Form.Label>
          <Form.Control
            name="pekerjaan"
            type="text"
            placeholder="Pekerjaan"
            value={pekerjaan}
            onChange={(e) => setPekerjaan(e.target.value)}
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
          Ubahkan
        </Button>
      </Form>
      {modalShow && (
        <MyModalsWrong show={modalShow} onHide={() => setModalShow(false)} title='Peringatan!' content='Periksa kembali, semua kolom harus diisi!' />
      )}
    </Container>
  )
}
