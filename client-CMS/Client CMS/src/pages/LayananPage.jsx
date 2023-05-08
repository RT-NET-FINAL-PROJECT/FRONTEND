import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import LayananCard from "../components/LayananCard";

export default function LayananPage() {

  return (
    <Container style={{ marginTop: "100px" }}>
      <h1 style={{ color: 'rgba(59,7,11,255)', marginTop: "120px", fontSize: "35px", textAlign: "center", fontWeight: "bold" }}>Layanan Warga RT X</h1>
      <div className="myButton" style={{ marginBottom: "5px", textAlign: "right" }}>
        <Button
          as={Link}
          to={"/layanan/add"}
          style={{
            marginTop: "30px",
            backgroundColor: 'rgba(59,7,11,255)',
            borderColor: 'rgba(59,7,11,255)'
          }}
        >
          + Tambahkan Layanan Warga
        </Button>
      </div>
      <div style={{ marginTop: "20px" }}>
        <LayananCard/>
      </div>
      <div style={{ marginTop: "20px" }}>
        <LayananCard/>
      </div>
      <div style={{ marginTop: "20px" }}>
        <LayananCard/>
      </div>
    </Container>
  )
}
