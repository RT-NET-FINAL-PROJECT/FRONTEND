import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addPost, fetchWargas } from "../store/action/actionCreator";
import { POSTS_ADD_RESPONSE, POSTS_ERROR } from "../store/action/actionType";
import MyModalsWrong from "../components/MyModalsWrong";
import Swal from 'sweetalert2';


export default function AddPostPage() {

  const [postData, setPostData] = useState({
    name: "",
    deskripsi: "",
    kategori: "",
    lokasi: "",
    biaya: "",
    imageUrl:""
  });

  const { wargas } = useSelector(
    (state) => state.warga
  );

  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const { postResponse, loading, errorMessage } = useSelector((state) => state.post)
  const navigate = useNavigate();

  const postDataHandler = (event) => {
    const { name, value } = event.target;
    const obj = { ...postData, [name]: value };
    // console.log(obj);
    setPostData(obj);
  };

  useEffect(() => dispatch(fetchWargas()), [dispatch]);

  useEffect(() => {
    dispatch({ type: POSTS_ADD_RESPONSE, payload: null })
    dispatch({ type: POSTS_ERROR, payload: "" })
  }, [dispatch]);

  const submitNewPost = async (event) => {
    event.preventDefault();
  
    try {
      await dispatch(addPost(postData));
      Swal.fire({
        icon: 'success',
        iconColor: 'rgba(59,7,11,255)',
        title: 'Penambahan Informasi',
        text: `Informasi ${postData.kategori} berhasil ditambahkan!`,
        showConfirmButton: false,
        timer: 1500
      });
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };
  

  // console.log(postResponse)
  useEffect(() => {
    if (postResponse) {
      navigate('/')
    }
  }, [navigate, postResponse])

  useEffect(() => {
    if (errorMessage) {
      setModalShow(true)
    }

    return () => dispatch({ type: POSTS_ERROR, payload: "" })
  }, [errorMessage, dispatch])

  return (
    <Container className="w-50" style={{ marginTop: "100px", marginBottom:"30px" }}>
      <h1 style={{ color: 'rgba(59,7,11,255)', fontWeight: "bold", fontSize: "35px", textAlign: "center" }}>RT {wargas.rt}/RW {wargas.rw} Kel. {wargas.kelurahan}</h1>
      <h1 style={{ color: 'rgba(59,7,11,255)', fontWeight: "bold", marginTop: "80px", fontSize: "35px", textAlign: "center" }}>Tambahkan Informasi Kegiatan</h1>
      <Form onSubmit={submitNewPost} style={{ borderColor: 'rgba(59,7,11,255)', marginTop: "25px" }}>
        <Form.Group >
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "5px" }}>Nama Kegiatan</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Nama Kegiatan"
            onChange={postDataHandler}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "5px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Deskripsi Kegiatan</Form.Label>
          <Form.Control
            name="deskripsi"
            as="textarea"
            rows={8}
            onChange={postDataHandler}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "5px" }}
          />
          <Form.Group>
            <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Kategori Kegiatan</Form.Label>
            <Form.Control
              name="kategori"
              as="select"
              onChange={postDataHandler}
              style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "5px" }}
            >
              <option selected disabled style={{ color: "grey" }}>--- Pilih Kategori Kegiatan ---</option>
              <option value="pengumuman">Pengumuman</option>
              <option value="event">Event</option>
            </Form.Control>
          </Form.Group>


          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Lokasi Kegiatan</Form.Label>
          <Form.Control
            name="lokasi"
            type="text"
            placeholder="Lokasi Kegiatan"
            onChange={postDataHandler}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "5px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Biaya Iuran Kegiatan</Form.Label>
          <Form.Control
            name="biaya"
            type="number"
            placeholder="Biaya Iuran Kegiatan"
            onChange={postDataHandler}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "5px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Link Gambar/Poster</Form.Label>
          <Form.Control
            name="imageUrl"
            type="text"
            placeholder="Masukkan Link Gambar/Poster"
            onChange={postDataHandler}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "5px" }}
          />
        </Form.Group>
        <Link to={'/'}>
          <Button
            style={{
              marginTop: "30px",
              backgroundColor: 'white',
              borderColor: 'rgba(59,7,11,255)',
              color: 'rgba(59,7,11,255)',
              marginRight: '10px',
            }}
          >
            Batalkan
          </Button>
        </Link>
        <Button
          style={{
            marginTop: "30px",
            backgroundColor: 'rgba(59,7,11,255)',
            borderColor: 'rgba(59,7,11,255)'
          }}
          type="submit"
        >
          Tambahkan
        </Button>
      </Form>
      {modalShow && (
        <MyModalsWrong show={modalShow} onHide={() => setModalShow(false)} title='Peringatan!' content='Periksa kembali, semua kolom harus diisi!' />
      )}
    </Container>
  );
}
