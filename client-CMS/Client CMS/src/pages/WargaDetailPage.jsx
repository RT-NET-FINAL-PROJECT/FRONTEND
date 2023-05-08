import Container from "react-bootstrap/Container";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export default function WargaDetailPage() {
  return (
    <Container style={{marginTop:"120px", marginBottom:"50px"}}>
      <div style={{marginTop: "20px"}}>
        <Card style={{borderColor:'rgba(59,7,11,255)'}}>
          <Card.Header 
            style={{
                fontWeight:"bold",
                fontSize:"20px", 
                backgroundColor:'rgba(59,7,11,255)', 
                borderColor:'rgba(59,7,11,255)', 
                color:"white"
            }}
            >
            Data Warga
          </Card.Header>
          <Card.Body>
            <div style={{textAlign:"end"}}>
              <Button
                  as={Link} 
                  to={"/warga/edit/:wargaId"}
                  style={{
                      backgroundColor:'white', 
                      borderColor:'rgba(59,7,11,255)',
                      color:'rgba(59,7,11,255)',
                      marginRight:'10px'
                  }}
              >
              Ubah Detil Data
              </Button>
              <Button
                  as={Link} 
                  to={"/warga/delete/:wargaId"}
                  style={{
                      backgroundColor:'rgba(59,7,11,255)', 
                      borderColor:'rgba(59,7,11,255)'
                  }}
              >
              Hapus Data
              </Button>
            </div>
            <Card.Text>Nama Lengkap&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;: </Card.Text>
            <Card.Text>NIK&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;:</Card.Text>
            <Card.Text>Status Akun&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;:</Card.Text>
            <Card.Text>Akun&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;:</Card.Text>
            <Card.Text>Aksi&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;:</Card.Text>
            <Card.Text>Jenis Kelamin&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;:</Card.Text>
            <Card.Text>Tempat Lahir&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;&nbsp;:</Card.Text>
            <Card.Text>Tanggal Lahir&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;:</Card.Text>
            <Card.Text>Nomor Telepon&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;:</Card.Text>
            <Card.Text>Email&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;:</Card.Text>
            <Card.Text>Agama&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;:</Card.Text>
            <Card.Text>Pekerjaan&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;:</Card.Text>
            <Card.Text>Status Perkawinan&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;:</Card.Text>
            <Card.Text>Status Keluarga&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;:</Card.Text>
            <Card.Text>Foto&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;&nbsp;:</Card.Text>
            <Card.Text>KTP&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;:</Card.Text>
            <Card.Text>Akta&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&nbsp;:</Card.Text>
            <Card.Text>Nomor Kartu Keluarga&emsp;&emsp;&emsp;&ensp;&nbsp;:</Card.Text>
            <Card.Text>Kartu Keluarga&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&nbsp;:</Card.Text>
          </Card.Body>
        </Card>
      </div>
    </Container>
  );
}
