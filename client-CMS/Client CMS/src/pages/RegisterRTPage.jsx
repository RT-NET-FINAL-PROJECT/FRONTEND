import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Logo from "../assets//Logo RT-Net-No-BG.png"
import { Link, useNavigate } from "react-router-dom";
import MyAlert from "../components/MyAlert";
import { baseUrl } from "../config/api.js"

export default function RegisterRTPage() {
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

        const objToPass = { ...userData };

        fetch(baseUrl + "rt/register", {
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
                        case 403:
                            throw new Error("Anda tidak memiliki hak akses");
                        default: throw new Error('Internal server error.')
                    }
                }
            })
            .then((data) => {
                // console.log(data)
                navigate('/login')
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
            <Container style={{ marginTop: "3%", marginBottom: "3%", width: "550px", backgroundColor: 'white', padding: "40px", borderRadius: "7px", border: "2px solid rgba(59,7,11,255)" }}>
                <div style={{ textAlign: "center" }}>
                    <img style={{ width: "180px" }} src={Logo} alt="logo" className="branding-menu-logo" />
                </div>
                <h3 style={{ textAlign: "center", color: 'rgba(59,7,11,255)', fontWeight: "bold", fontSize: "35px" }}>ADMINISTRATION SYSTEM</h3>
                <br />
                <h4 style={{ color: 'rgba(59,7,11,255)', textAlign: "center", marginTop: "3%", fontWeight: "bold" }}>Register Here!</h4>
                {showAlert && <MyAlert title={errorMessage} setShow={setShowAlert} />}
                <Form onSubmit={submitTheValue}>
                    <Form.Group className="mb-1" controlId="formBasicNamaLengkap">
                        <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>Nama Lengkap :</Form.Label>
                        <Form.Control className="form-control placeholder-color"
                            name="namaLengkap"
                            type="text"
                            placeholder="Enter Nama Lengkap"
                            onChange={changeHandler}
                            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicNIK">
                        <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>NIK :</Form.Label>
                        <Form.Control className="form-control placeholder-color"
                            name="nomorKtp"
                            type="number"
                            placeholder="Enter NIK"
                            onChange={changeHandler}
                            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicEmail">
                        <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>Email :</Form.Label>
                        <Form.Control className="form-control placeholder-color"
                            name="email"
                            type="email"
                            placeholder="Enter email"
                            onChange={changeHandler}
                            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicPassword">
                        <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>Password :</Form.Label>
                        <Form.Control
                            name="password"
                            type="password"
                            placeholder="Enter password"
                            onChange={changeHandler}
                            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
                        />
                    </Form.Group>
                    <Form.Group className="mb-1" controlId="formBasicNoTelp">
                        <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>Nomor Telepon :</Form.Label>
                        <Form.Control className="form-control placeholder-color"
                            name="nomorTelp"
                            type="number"
                            placeholder="Enter Phone Number"
                            onChange={changeHandler}
                            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
                        />
                    </Form.Group>

                    <Button type="submit" style={{ marginTop: "30px", backgroundColor: 'rgba(59,7,11,255)', color: "white", fontWeight: "bold", borderColor: 'rgba(59,7,11,255)' }}>Submit
                    </Button>
                    <Link to={'/login'}>
                        <Button type="submit" style={{ marginTop: "30px", backgroundColor: "white", color: 'rgba(59,7,11,255)', fontWeight: "bold", borderColor: 'rgba(59,7,11,255)', marginLeft: "10px" }}>Back to Log in
                        </Button>
                    </Link>
                </Form>
            </Container>
        </>
    )
}
