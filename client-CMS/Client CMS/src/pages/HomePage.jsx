import Container from "react-bootstrap/esm/Container";
import PostCard from "../components/PostCard";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, fetchWargas } from "../store/action/actionCreator";
import LoadingScreen from "../components/LoadingScreen";
import { useEffect } from "react";

export default function HomePage() {

  const { posts, loading } = useSelector(
    (state) => state.post
  );

  const { wargas } = useSelector(
    (state) => state.warga
  );
  
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchPosts()), [dispatch]);
  useEffect(() => dispatch(fetchWargas()), [dispatch]);
  // console.log(posts)
  return (
    <Container style={{ marginTop: "100px" }}>
      {loading ? <LoadingScreen /> : (
        <>
          <h1 style={{ color: 'rgba(59,7,11,255)', marginTop: "120px", fontSize: "40px", textAlign: "center", fontWeight: "bold" }}>Pos Informasi RT {wargas.rt}/RW {wargas.rw} Kel. {wargas.kelurahan}</h1>
          <div className="myButton" style={{ marginBottom: "5px", textAlign: "right" }}>
            <Button
              as={Link}
              to={"/posts/add"}
              style={{
                marginTop: "50px",
                backgroundColor: 'rgba(59,7,11,255)',
                borderColor: 'rgba(59,7,11,255)',
                padding:"10px",
                fontWeight:"bold",
              }}
              onMouseOver={(e) => e.target.style.color = "#c4b5b6"} 
              onMouseOut={(e) => e.target.style.color = "white"}
            >
              + Tambahkan Informasi
            </Button>
          </div>
          <div>
            {posts.map((post) => {
                return <PostCard post={post} key={post.id}  />;
              })
            }
          </div>
        </>
      )}
    </Container>
  )
}
