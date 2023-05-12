import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export default function LayananCard({ service }) {
  // console.log(service)
  return (
    <div style={{ marginTop: "20px", marginBottom: "30px" }}>
      <Card style={{borderColor:'rgba(59,7,11,255)'}}>
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
          <br/>
          <Card.Text>
            Deskripsi Layanan &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;:&ensp;
          </Card.Text>
          <Card.Text>
          {service.deskripsi}
          </Card.Text>
          <Card.Text>
            Link Dokumen Pendukung: &emsp;&emsp;&nbsp;:&ensp;
            <a href={service.dokumen_pendukung}>{service.dokumen_pendukung}</a>
          </Card.Text>
          <div style={{textAlign:"end"}}>
            <Button
                as={Link} 
                to={`/layanan/edit/${service.id}`}
                style={{
                    backgroundColor:'white', 
                    borderColor:'rgba(59,7,11,255)',
                    color:'rgba(59,7,11,255)',
                    marginRight:'10px',
                    padding: "7px",
                    fontSize: "15px",
                    fontWeight: "bold"
                }}
                onMouseOver={(e) => e.target.style.backgroundColor = "#c4b5b6"} 
                onMouseOut={(e) => e.target.style.backgroundColor = "white"}
            >
            Ubah Info Layanan Warga
            </Button>
            <Button
                as={Link} 
                to={`/layanan/delete/${service.id}`}
                style={{
                    backgroundColor:'rgba(59,7,11,255)', 
                    borderColor:'rgba(59,7,11,255)',
                    padding: "7px",
                    fontSize: "15px",
                    fontWeight: "bold"
                }}
                onMouseOver={(e) => e.target.style.color = "#c4b5b6"} 
                onMouseOut={(e) => e.target.style.color = "white"}
            >
            Hapus Info Layanan Warga
            </Button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

