import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Spinner from "react-bootstrap/Spinner";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Logo from "../assets/Logo RT-Net-No-BG.png"
import { Link, useNavigate } from "react-router-dom";
import MyAlert from "../components/MyAlert";
import { baseUrl }  from "../config/api"

export default function LoginPage() {
  const navigate = useNavigate();
  const [showAlert, setShowAlert] = useState(false);
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  // console.log({email, password})

  const localSetLogin = (e) => {
    e.preventDefault();

    if (!email) {
      setErrorMessage("Email is required!");
      setShowAlert(true);
      return;
    }

    if (!password) {
      setErrorMessage("Password is required!");
      setShowAlert(true);
    }

    const obj = {
      email,
      password,
    };
    setLoading(true);
    fetch(baseUrl + "rt/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((response) => {
        // console.log(response)
        if (response.ok) {
          return response.json();
        } else {
          // console.log(response)
          switch (response.status) {
            case 401:
              throw new Error("Email / Password salah");
            case 403:
              throw new Error("Anda tidak memiliki hak akses");
            default:
              throw new Error("Internal server error");
          }
        }
      })
      .then((data) => {
        // console.log(data)
        const { access_token } = data;
        localStorage.setItem("access_token", access_token);
        navigate("/");
      })
      .catch((error) => {
        setErrorMessage(error?.message);
        setShowAlert(true);
        return;
      })
      .finally((_) => {
        setLoading(false);
      });
  };


  return (
    <>
      <Container style={{ marginTop: "5%", width: "550px", backgroundColor: 'white', padding: "40px", borderRadius: "7px", border: "2px solid rgba(59,7,11,255)" }}>
        <div style={{ textAlign: "center" }}>
          <img style={{ width: "180px" }} src={Logo} alt="logo" className="branding-menu-logo" />
        </div>
        <h3 style={{ textAlign: "center", color: 'rgba(59,7,11,255)', fontWeight: "bold", fontSize: "35px" }}>ADMINISTRATION SYSTEM</h3>
        <br />
        <h4 style={{ color: 'rgba(59,7,11,255)', textAlign: "center", marginTop: "10%", fontWeight: "bold" }}>Log in Here!</h4>
        {showAlert && <MyAlert title={errorMessage} setShow={setShowAlert} />}
        <Form onSubmit={localSetLogin}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>Email :</Form.Label>
            <Form.Control className="form-control placeholder-color"
              type="email"
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
              style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label style={{ color: 'rgba(59,7,11,255)' }}>Password :</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              onChange={(e) => setPassword(e.target.value)}
              style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)" }}
            />
          </Form.Group>
          <Button type="submit" style={{ marginTop: "15px", backgroundColor: 'rgba(59,7,11,255)', color: "white", fontWeight: "bold", borderColor: 'rgba(59,7,11,255)' }}>
          {loading && <>
            <Spinner
              as="span"
              animation="border"
              size="sm"
              role="status"
              aria-hidden="true"
              />
              <span className="visually-hidden">Loading...</span>
              &nbsp;
          </>
          }
          {!loading && <span>Log in</span>}
          {loading && <span>Loading ...</span>}
          </Button>
          <Link to={'/register-RT'}>
          <Button type="submit" style={{ marginTop: "15px", backgroundColor: "white", color: 'rgba(59,7,11,255)', fontWeight: "bold", borderColor: 'rgba(59,7,11,255)', marginLeft: "10px" }}>Register Here
          </Button>
        </Link>
        </Form>
      </Container>
    </>
  );
}
