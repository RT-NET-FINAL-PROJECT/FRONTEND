import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";

export default function PostCard({ post }) {
  return (
    <div style={{ marginTop: "20px" }}>
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
          {post.kategori}
        </Card.Header>
        <Card.Body>
          <div style={{textAlign:"center", margin:"30px"}}>
              <img src={post.imageUrl} width="100%" alt="img" />
          </div>
          <Card.Title>{post.name}</Card.Title>
          <Card.Text>
            Deskripsi Kegiatan&emsp;&emsp;:&ensp;
            {post.deskripsi}
          </Card.Text>
          <Card.Text>
            Lokasi Kegiatan&emsp;&emsp;&emsp;&nbsp;:&ensp;
            {post.lokasi}
          </Card.Text>
          <Card.Text>
            Biaya Kegiatan&emsp;&emsp;&emsp;&ensp;:&ensp;
            {post.biaya}
          </Card.Text>
          <Button
              as={Link} 
              to={`/posts/edit/${post.id}`}
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
              to={`/posts/delete/${post.id}`}
              style={{
                  backgroundColor:'rgba(59,7,11,255)', 
                  borderColor:'rgba(59,7,11,255)'
              }}
          >
          Hapus Informasi Kegiatan
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
}

