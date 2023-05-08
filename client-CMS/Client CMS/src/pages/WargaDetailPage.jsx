import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export default function WargaDetailPage() {
  return (
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
        Kategori Kegiatan
      </Card.Header>
      <Card.Body>
        <Card.Title>Nama Kegiatan</Card.Title>
        <Card.Text>
          Deskripsi Kegiatan:

          Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
        </Card.Text>
        <Card.Text>
          Lokasi Kegiatan:

          Lorem ipsum dolor sit amet
        </Card.Text>
        <Card.Text>
          Biaya Kegiatan:

          Rp 25.000,00
        </Card.Text>
        <Button
            as={Link} 
            to={"/posts/edit/:postId"}
            style={{
                backgroundColor:'white', 
                borderColor:'rgba(59,7,11,255)',
                color:'rgba(59,7,11,255)',
                marginRight:'10px'
            }}
        >
        Ubah Informasi Kegiatan
        </Button>
        <Button
            as={Link} 
            to={"/posts/delete/:postId"}
            style={{
                backgroundColor:'rgba(59,7,11,255)', 
                borderColor:'rgba(59,7,11,255)'
            }}
        >
        Hapus Informasi Kegiatan
        </Button>
      </Card.Body>
    </Card>
  );
}
