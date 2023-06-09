import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Logo from "../assets/Logo RT NET Horizontal.png"

export default function MyNavbar() {
  const [expanded, setExpanded] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const toggleNav = () => {
    setExpanded(!expanded);
  };

  const localLogOut = (e) => {
    e.preventDefault();
    localStorage.clear();
    navigate("/login");
  };

  return (
    <Navbar
        bg="white"
        expand="lg"
        fixed="top"
        style={{ 
            borderTop: "10px solid rgba(59,7,11,255)",
            borderBottom: "10px solid rgba(59,7,11,255)",
        }}
        expanded={expanded}
        collapseOnSelect
    >
      <Container>
        <Navbar.Brand as={Link} to={"/"} style={{ color: 'rgba(59,7,11,255)', fontWeight: "bold" }}>
          <Link to={"/"}
            onMouseOver={(e) => e.target.style.backgroundColor = "#c4b5b6"} 
            onMouseOut={(e) => e.target.style.backgroundColor = "white"}
          >
            <img style={{ width: "160px" }} src={Logo} alt="logo" className="branding-menu-logo" />
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleNav} />
        <Navbar.Collapse>
          <Nav className="me-auto">
            <Nav.Link 
                as={Link} 
                to={"/"} 
                style={{ 
                    color: 'rgba(59,7,11,255)', 
                    fontWeight: "bold", 
                    marginRight: "5px",
                    textDecoration: "none",
                    borderBottom: location.pathname === "/" ? "2px solid rgba(59,7,11,255)" : "none",
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#c4b5b6"} 
                onMouseOut={(e) => e.target.style.backgroundColor = "white"}
                >
              POS INFORMASI
            </Nav.Link>
            <Nav.Link 
                as={Link} 
                to={"/warga"} 
                style={{ 
                    color: 'rgba(59,7,11,255)', 
                    fontWeight: "bold", 
                    marginRight: "5px",
                    textDecoration: "none",
                    borderBottom: location.pathname === "/warga" ? "2px solid rgba(59,7,11,255)" : "none", 
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#c4b5b6"} 
                onMouseOut={(e) => e.target.style.backgroundColor = "white"}
                >
              DATA WARGA
            </Nav.Link>
            <Nav.Link 
                as={Link} 
                to={"/request"} 
                style={{ 
                    color: 'rgba(59,7,11,255)', 
                    fontWeight: "bold", 
                    marginRight: "5px",
                    textDecoration: "none",
                    borderBottom: location.pathname === "/request" ? "2px solid rgba(59,7,11,255)" : "none", 
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#c4b5b6"} 
                onMouseOut={(e) => e.target.style.backgroundColor = "white"}
                >
              REQUEST WARGA
            </Nav.Link>
            <Nav.Link 
                as={Link} 
                to={"/layanan"} 
                style={{ 
                    color: 'rgba(59,7,11,255)', 
                    fontWeight: "bold", 
                    marginRight: "5px",
                    textDecoration: "none",
                    borderBottom: location.pathname === "/layanan" ? "2px solid rgba(59,7,11,255)" : "none", 
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#c4b5b6"} 
                onMouseOut={(e) => e.target.style.backgroundColor = "white"}
                >
              LAYANAN WARGA
            </Nav.Link>
            <Nav.Link 
                as={Link} 
                to={"/register-RT-Admin"} 
                style={{ 
                    color: 'rgba(59,7,11,255)', 
                    fontWeight: "bold", 
                    marginRight: "5px",
                    textDecoration: "none",
                    borderBottom: location.pathname === "/register-RT-Admin" ? "2px solid rgba(59,7,11,255)" : "none", 
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#c4b5b6"} 
                onMouseOut={(e) => e.target.style.backgroundColor = "white"}
                >
              REGISTRASI PERANGKAT RT
            </Nav.Link>
            <Nav.Link 
                as={Link} 
                to={"/register-RT-Baru"} 
                style={{ 
                    color: 'rgba(59,7,11,255)', 
                    fontWeight: "bold", 
                    marginRight: "5px",
                    textDecoration: "none",
                    borderBottom: location.pathname === "/register-RT-Baru" ? "2px solid rgba(59,7,11,255)" : "none", 
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#c4b5b6"} 
                onMouseOut={(e) => e.target.style.backgroundColor = "white"}
            >
              REGISTRASI RT BARU
            </Nav.Link>
          </Nav>
            <Button 
                style={{ 
                    backgroundColor: 'rgba(59,7,11,255)', 
                    fontWeight: "bold", 
                    color: "white", 
                    borderColor:'rgba(59,7,11,255)' 
                }} 
                onMouseOver={(e) => e.target.style.color = "#c4b5b6"} 
                onMouseOut={(e) => e.target.style.color = "white"}
                onClick={localLogOut}
            >
                Logout
            </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}