import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import { Link, useNavigate } from "react-router-dom";
import MyAlert from "../components/MyAlert";
import { baseUrl } from "../config/api.js"
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchWargas } from "../store/action/actionCreator";
export default function RegisterRTAdminPage() {

    const { wargas } = useSelector(
        (state) => state.warga
    );
    const dispatch = useDispatch();
    useEffect(() => dispatch(fetchWargas()), [dispatch]);
    const navigate = useNavigate()
    const [showAlert, setShowAlert] = useState(() => false)
    const [errorMessage, setErrorMessage] = useState('')
    const [userData, setUserData] = useState({
        namaLengkap: "",
        nomorTelp: "",
        email: "",
        password: "",
        nomorKtp: "",
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
        if (!userData.namaLengkap) {
            setErrorMessage('Nama lengkap dibutuhkan')
            setShowAlert(true)
            return
        }
        if (!userData.nomorTelp) {
            setErrorMessage('Nomor Telepon dibutuhkan')
            setShowAlert(true)
            return
        }
        if (!userData.email) {
            setErrorMessage('Email dibutuhkan')
            setShowAlert(true)
            return
        }
        if (!userData.password) {
            setErrorMessage('Password dibutuhkan')
            setShowAlert(true)
            return
        }
        if (!userData.nomorKtp) {
            setErrorMessage('NIK dibutuhkan')
            setShowAlert(true)
            return
        }

        const objToPass = { ...userData};

        fetch(baseUrl + "sekretariat/register", {
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
                        case 400: throw new Error('Email / nomor telepon sudah terdaftar')
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
                    namaLengkap: "",
                    nomorTelp: "",
                    email: "",
                    password: "",
                    nomorKtp: ""
                };
                setUserData(afterSubmitObj);
            })
    };

    return (
        <>
        <h1 style={{ color: 'rgba(59,7,11,255)', fontSize: "40px", textAlign: "center", marginTop: "7%", fontWeight: "bold" }}>RT {wargas.rt}/RW {wargas.rw} Kel. {wargas.kelurahan}</h1>
            <Container style={{ marginBottom: "3%", width: "500px", backgroundColor: 'white', padding: "20px" }}>
                <h1 style={{ color: 'rgba(59,7,11,255)', fontSize: "35px", textAlign: "center", marginBottom: "10%", fontWeight: "bold" }}>Registrasi Perangkat RT</h1>
                {showAlert && <MyAlert title={errorMessage} setShow={setShowAlert} />}
                <Form onSubmit={submitTheValue}>
                    <Form.Group className="mb-3" controlId="formBasicNamaLengkap">
                        <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>Nama Lengkap :</Form.Label>
                        <Form.Control className="form-control placeholder-color"
                            name="namaLengkap"
                            type="text"
                            placeholder="Enter Nama Lengkap"
                            onChange={changeHandler}
                            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>Email :</Form.Label>
                        <Form.Control className="form-control placeholder-color"
                            name="email"
                            type="email"
                            placeholder="Enter Email"
                            onChange={changeHandler}
                            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>Password :</Form.Label>
                        <Form.Control
                            name="password"
                            type="password"
                            placeholder="Enter Password"
                            onChange={changeHandler}
                            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNIK">
                        <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>NIK :</Form.Label>
                        <Form.Control className="form-control placeholder-color"
                            name="nomorKtp"
                            type="number"
                            placeholder="Enter NIK"
                            onChange={changeHandler}
                            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicNoTelp">
                        <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>Nomor Telepon :</Form.Label>
                        <Form.Control className="form-control placeholder-color"
                            name="nomorTelp"
                            type="number"
                            placeholder="Enter Phone Number"
                            onChange={changeHandler}
                            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
                        />
                    </Form.Group>
                    <Link to={'/'}>
                        <Button type="submit" style={{ marginTop: "30px", backgroundColor: "white", color: 'rgba(59,7,11,255)', fontWeight: "bold", borderColor: 'rgba(59,7,11,255)' }}
                        onMouseOver={(e) => e.target.style.backgroundColor = "#c4b5b6"} 
                        onMouseOut={(e) => e.target.style.backgroundColor = "white"}>Back to Home
                        </Button>
                    </Link>
                    <Button type="submit" style={{ marginTop: "30px", backgroundColor: 'rgba(59,7,11,255)', color: "white", fontWeight: "bold", borderColor: 'rgba(59,7,11,255)', marginLeft: "10px" }}
                    onMouseOver={(e) => e.target.style.color = "#c4b5b6"} 
                    onMouseOut={(e) => e.target.style.color = "white"}>Submit
                    </Button>
                </Form>
            </Container>
        </>
    )
}
