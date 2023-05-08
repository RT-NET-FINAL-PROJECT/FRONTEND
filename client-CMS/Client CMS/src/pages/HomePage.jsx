import Container from "react-bootstrap/esm/Container";
import PostCard from "../components/PostCard";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

export default function HomePage() {

  return (
    <Container style={{marginTop:"100px"}}>
      <h1 style={{color:'rgba(59,7,11,255)', marginTop: "120px", fontSize:"35px", textAlign:"center", fontWeight: "bold"}}>Pos Informasi Kegiatan RT X</h1>
        <div className="myButton" style={{marginBottom:"5px", textAlign: "right" }}>
          <Button 
            as={Link} 
            to={"/posts/add"} 
            style={{
              marginTop: "30px",
              backgroundColor:'rgba(59,7,11,255)', 
              borderColor:'rgba(59,7,11,255)'
            }}
          >
            + Tambahkan Informasi Kegiatan
          </Button>
        </div>
      <div style={{marginTop: "20px"}}>
        <PostCard/>
      </div>
      <div style={{marginTop: "20px"}}>
        <PostCard/>
      </div>
      <div style={{marginTop: "20px"}}>
        <PostCard/>
      </div>
      <div style={{marginTop: "20px"}}>
        <PostCard/>
      </div>
      <div style={{marginTop: "20px"}}>
        <PostCard/>
      </div>
    </Container>
  )
}
