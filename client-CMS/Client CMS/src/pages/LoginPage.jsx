import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/esm/Container";
import Form from "react-bootstrap/Form";
import Logo from "../assets//Logo RT-Net-No-BG.png"
import { Link } from "react-router-dom";

export default function LoginPage() {
  return (
    <>
    <Container style={{ marginTop:"5%", width:"550px", backgroundColor:'white', padding:"40px", borderRadius:"7px", border: "2px solid rgba(59,7,11,255)"}}> 
        <div style={{textAlign:"center"}}>
        <img style={{width:"180px"}} src={Logo} alt="logo" className="branding-menu-logo" />
        </div>
        <h3 style={{textAlign:"center",  color:'rgba(59,7,11,255)', fontWeight:"bold", fontSize:"35px"}}>ADMINISTRATION SYSTEM</h3>
        <br/>
          <h4 style={{color:'rgba(59,7,11,255)', textAlign:"center" , marginTop:"10%", fontWeight:"bold"}}>Log in Here!</h4>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label style={{color:'rgba(59,7,11,255)'}}>Email :</Form.Label>
              <Form.Control className="form-control placeholder-color"
                type="email"
                placeholder="Enter email"
                style={{color:'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)"}}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label style={{color:'rgba(59,7,11,255)'}}>Password :</Form.Label>
              <Form.Control
                type="password"
                placeholder="Enter password"
                style={{color:'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)"}}
              />
            </Form.Group>
            <Link to={'/register-RT'}>
              <Button type="submit" style={{marginTop:"15px", backgroundColor:"white", color:'rgba(59,7,11,255)', fontWeight: "bold", borderColor:'rgba(59,7,11,255)'}}>Register Here
              </Button>
            </Link>
            <Button type="submit" style={{marginTop:"15px",backgroundColor:'rgba(59,7,11,255)', color:"white", fontWeight: "bold", borderColor:'rgba(59,7,11,255)', marginLeft:"10px"}}>Log in
            </Button>
          </Form>
    </Container>
    </>
  );
}
