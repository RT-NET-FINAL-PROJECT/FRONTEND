import Container from "react-bootstrap/esm/Container";
import PostCard from "../components/PostCard";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/action/actionCreator";
import LoadingScreen from "../components/LoadingScreen";
import { useEffect } from "react";

export default function HomePage() {

  const { posts, loading } = useSelector(
    (state) => state.post
  );
  
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchPosts()), [dispatch]);
  
  // console.log(posts)
  return (
    <Container style={{ marginTop: "100px" }}>
      {loading ? <LoadingScreen /> : (
        <>
          <h1 style={{ color: 'rgba(59,7,11,255)', marginTop: "120px", fontSize: "35px", textAlign: "center", fontWeight: "bold" }}>Pos Informasi Kegiatan RT X</h1>
          <div className="myButton" style={{ marginBottom: "5px", textAlign: "right" }}>
            <Button
              as={Link}
              to={"/posts/add"}
              style={{
                marginTop: "30px",
                backgroundColor: 'rgba(59,7,11,255)',
                borderColor: 'rgba(59,7,11,255)'
              }}
            >
              + Tambahkan Informasi Kegiatan
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
