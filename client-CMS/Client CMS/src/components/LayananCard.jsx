import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export default function LayananCard() {
  return (
    <Card style={{borderColor:'rgba(59,7,11,255)', margin:"40px"}}>
      <Card.Header 
        style={{
            fontWeight:"bold",
            fontSize:"17px", 
            backgroundColor:'rgba(59,7,11,255)', 
            borderColor:'rgba(59,7,11,255)', 
            color:"white"
        }}
        >
        Layanan Warga RT X
      </Card.Header>
      <Card.Body>
        <Card.Title>Nama Layanan</Card.Title>
        <Card.Text>
          Deskripsi Layanan:

          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
        </Card.Text>
        <Button
            as={Link} 
            to={"/layanan/edit/:layananId"}
            style={{
                backgroundColor:'white', 
                borderColor:'rgba(59,7,11,255)',
                color:'rgba(59,7,11,255)',
                marginRight:'10px'
            }}
        >
        Ubah Info Layanan Warga
        </Button>
        <Button
            as={Link} 
            to={"/layanan/delete/:layananId"}
            style={{
                backgroundColor:'rgba(59,7,11,255)', 
                borderColor:'rgba(59,7,11,255)'
            }}
        >
        Hapus Info Layanan Warga
        </Button>
      </Card.Body>
    </Card>
  );
}

