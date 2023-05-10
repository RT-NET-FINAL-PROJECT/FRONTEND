import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export default function LayananCard({ service }) {
  // console.log(service)
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
        Layanan Warga RT {service.Rt.rt}/RW {service.Rt.rw} Kel. {service.Rt.kelurahan}
      </Card.Header>
      <Card.Body>
        <Card.Title>{service.name}</Card.Title>
        <Card.Text>
          Deskripsi Layanan: &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;:&ensp;
          {service.deskripsi}
        </Card.Text>
        <Card.Text>
          Link Dokumen Pendukung: &emsp;&emsp;&nbsp;:&ensp;
          <a href={service.dokumen_pendukung}>{service.dokumen_pendukung}</a>
        </Card.Text>
        <Button
            as={Link} 
            to={`/layanan/edit/${service.id}`}
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
            to={`/layanan/delete/${service.id}`}
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

