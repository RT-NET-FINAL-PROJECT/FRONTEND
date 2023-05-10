import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import MyAlert from "../components/MyAlert";
import { baseUrl } from "../config/api.js"

export default function RegisterRTBaruPage() {

  const navigate = useNavigate()
  const [showAlert, setShowAlert] = useState(() => false)
  const [errorMessage, setErrorMessage] = useState('')
  const [userData, setUserData] = useState({
    kepala_rt: "",
    nik_rt: "",
    rt: "",
    rw: "",
    kelurahan:"",
    kecamatan:"",
    kotaKabupaten:"",
    provinsi:"",
    link_grup_wa:""
  });

  const changeHandler = (event) => {
    // console.log(event)
    const obj = { ...userData, [event.target.name]: event.target.value };
    // console.log(obj)
    setUserData(obj);
  };

  const submitTheValue = (event) => {
    event.preventDefault();
    // console.log(userData)
    if (!userData.kepala_rt) {
      setErrorMessage('Nama lengkap Ketua RT dibutuhkan')
      setShowAlert(true)
      return
    }
    if (!userData.nik_rt) {
      setErrorMessage('NIK Ketua RT dibutuhkan')
      setShowAlert(true)
      return
    }
    if (!userData.rt) {
      setErrorMessage('Nomor RT dibutuhkan')
      setShowAlert(true)
      return
    }
    if (!userData.rw) {
      setErrorMessage('Nomor RW dibutuhkan')
      setShowAlert(true)
      return
    }
    if (!userData.kelurahan) {
      setErrorMessage('Nama Kelurahan dibutuhkan')
      setShowAlert(true)
      return
    }
    if (!userData.kecamatan) {
      setErrorMessage('Nama Kecamatan dibutuhkan')
      setShowAlert(true)
      return
    }
    if (!userData.kotaKabupaten) {
      setErrorMessage('Nama Kota/Kabupaten dibutuhkan')
      setShowAlert(true)
      return
    }
    if (!userData.provinsi) {
      setErrorMessage('Nama Provinsi dibutuhkan')
      setShowAlert(true)
      return
    }
    if (!userData.link_grup_wa) {
      setErrorMessage('Link Grup WhatsApp dibutuhkan')
      setShowAlert(true)
      return
    }
    const objToPass = { ...userData };

    fetch(baseUrl + "admin/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        access_token: localStorage.getItem('access_token')
      },
      body: JSON.stringify(objToPass),
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          // console.log(response)
          switch (response.status) {
            case 400: throw new Error('NIK Ketua RT sudah terdaftar')
            default: throw new Error('Internal server error.')
          }
        }
      })
      .then((data) => {
        // console.log(data)
        navigate('/')
      })
      .catch((error) => {
        console.log(error)
        setErrorMessage(error?.message)
        setShowAlert(true)
        return
      })
      .finally(() => {
        const afterSubmitObj = {
          kepala_rt: "",
          nik_rt: "",
          rt: "",
          rw: "",
          kelurahan:"",
          kecamatan:"",
          kotaKabupaten:"",
          provinsi:"",
          link_grup_wa:""
        };
        setUserData(afterSubmitObj);
      })
  };

  return (
    <>
    <h1 style={{ color: 'rgba(59,7,11,255)', fontSize: "30px", textAlign: "center", marginTop: "7%", fontWeight: "bold" }}>Registrasi RT Baru ke ekosistem RT-NET!</h1>
      <Container style={{ marginBottom: "3%", width: "550px", backgroundColor: 'white', padding: "40px" }}>
        {showAlert && <MyAlert title={errorMessage} setShow={setShowAlert} />}
        <Form onSubmit={submitTheValue}>
          <Form.Group className="mb-2" controlId="formBasicNamaLengkap">
            <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>Nama Lengkap Ketua RT:</Form.Label>
            <Form.Control className="form-control placeholder-color"
              name="kepala_rt"
              type="text"
              placeholder="Enter Nama Lengkap"
              onChange={changeHandler}
              style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicNIK">
            <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>NIK Ketua RT:</Form.Label>
            <Form.Control className="form-control placeholder-color"
              name="nik_rt"
              type="number"
              placeholder="Enter NIK"
              onChange={changeHandler}
              style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicWAGroup">
          <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>Link WhatsApp Group RT:</Form.Label>
          <Form.Control className="form-control placeholder-color"
            name="link_grup_wa"
            type="text"
            placeholder="Enter Link WA Group"
            onChange={changeHandler}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
          />
        </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicRT">
            <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>RT :</Form.Label>
            <Form.Control className="form-control placeholder-color"
              name="rt"
              type="number"
              placeholder="Enter RT"
              onChange={changeHandler}
              style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicRW">
            <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>RW :</Form.Label>
            <Form.Control className="form-control placeholder-color"
              name="rw"
              type="number"
              placeholder="Enter RW"
              onChange={changeHandler}
              style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicKelurahan">
            <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>Kelurahan :</Form.Label>
            <Form.Control className="form-control placeholder-color"
              name="kelurahan"
              type="text"
              placeholder="Enter Kelurahan"
              onChange={changeHandler}
              style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicKecamatan">
            <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>Kecamatan :</Form.Label>
            <Form.Control
              name="kecamatan"
              type="text"
              placeholder="Enter Kecamatan"
              onChange={changeHandler}
              style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicKabupaten">
            <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>Kota/Kabupaten :</Form.Label>
            <Form.Control className="form-control placeholder-color"
              name="kotaKabupaten"
              type="text"
              placeholder="Enter Kota/Kabupaten"
              onChange={changeHandler}
              style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
            />
          </Form.Group>
          <Form.Group className="mb-2" controlId="formBasicProvinsi">
            <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>Provinsi :</Form.Label>
            <Form.Control className="form-control placeholder-color"
              name="provinsi"
              type="text"
              placeholder="Enter Provinsi"
              onChange={changeHandler}
              style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
            />
          </Form.Group>
          <Link to={'/'}>
            <Button type="submit" style={{ marginTop: "20px", backgroundColor: "white", color: 'rgba(59,7,11,255)', fontWeight: "bold", borderColor: 'rgba(59,7,11,255)' }}>Back to Home
            </Button>
          </Link>
          <Button type="submit" style={{ marginTop: "20px", backgroundColor: 'rgba(59,7,11,255)', color: "white", fontWeight: "bold", borderColor: 'rgba(59,7,11,255)', marginLeft: "10px" }}>Submit
          </Button>
        </Form>
      </Container>
    </>
  )
}
