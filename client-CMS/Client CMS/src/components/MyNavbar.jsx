import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Logo from "../assets/Logo RT NET Horizontal.png"

export default function MyNavbar() {
  const [expanded, setExpanded] = useState(false);

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      bg="white"
      expand="lg"
      fixed="top"
      style={{ border: "2px solid rgba(59,7,11,255)" }}
      expanded={expanded}
      collapseOnSelect
    >
      <Container>
        <Navbar.Brand as={Link} to={"/"} style={{ color: 'rgba(59,7,11,255)', fontWeight: "bold" }}>
          <img style={{ width: "160px" }} src={Logo} alt="logo" className="branding-menu-logo" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleNav} />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link as={Link} to={"/"} style={{ color: 'rgba(59,7,11,255)', fontWeight: "bold", marginRight: "15px" }}>
              POSTS
            </Nav.Link>
            <Nav.Link as={Link} to={"/warga"} style={{ color: 'rgba(59,7,11,255)', fontWeight: "bold", marginRight: "15px" }}>
              DATA WARGA
            </Nav.Link>
            <Nav.Link as={Link} to={"/kas"} style={{ color: 'rgba(59,7,11,255)', fontWeight: "bold", marginRight: "15px" }}>
              KAS RT
            </Nav.Link>
            <Nav.Link as={Link} to={"/layanan"} style={{ color: 'rgba(59,7,11,255)', fontWeight: "bold", marginRight: "15px" }}>
              LAYANAN WARGA
            </Nav.Link>
            <Nav.Link as={Link} to={"/register-RT-Admin"} style={{ color: 'rgba(59,7,11,255)', fontWeight: "bold", marginRight: "15px" }}>
              REGISTRASI PERANGKAT RT
            </Nav.Link>
            <Nav.Link as={Link} to={"/register-RT"} style={{ color: 'rgba(59,7,11,255)', fontWeight: "bold", marginRight: "15px" }}>
              REGISTRSI RT BARU
            </Nav.Link>
          </Nav>
          <Button style={{ backgroundColor: 'rgba(59,7,11,255)', fontWeight: "bold" }}>
            Logout
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
