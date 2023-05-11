import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchDetailPost, updatePost, fetchWargas } from "../store/action/actionCreator";
import { POSTS_ERROR, POSTS_UPDATE } from "../store/action/actionType";
import MyModalsWrong from "../components/MyModalsWrong"

export default function EditPostPage() {
  const { postId } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch()
  useEffect(() => dispatch(fetchDetailPost(postId)), [dispatch, postId])
  const [modalShow, setModalShow] = useState(false);
  const { postDetail, loadingStatus, errorMessage, updateStatus } = useSelector((state) => state.post)

  const { wargas } = useSelector(
    (state) => state.warga
  );

  const [name, setName] = useState(() => "")
  const [deskripsi, setDeskripsi] = useState(() => "")
  const [kategori, setKategori] = useState(() => "")
  const [lokasi, setLokasi] = useState(() => "")
  const [biaya, setBiaya] = useState(() => "")
  const [imageUrl, setImageUrl] = useState(() => "")
  // const dispatch = useDispatch()

  useEffect(() => {
    if (postDetail) {
      setName(postDetail.name)
      setDeskripsi(postDetail.deskripsi)
      setKategori(postDetail.kategori)
      setLokasi(postDetail.lokasi)
      setBiaya(postDetail.biaya)
      setImageUrl(postDetail.imageUrl)
    }
  }, [postDetail])

  const editPost = (e) => {
    e.preventDefault();
    const objToSend = {
      name,
      deskripsi,
      kategori,
      lokasi,
      biaya,
      imageUrl
    };

    dispatch(updatePost(objToSend, postId))
  };
  // console.log(updateStatus)
  useEffect(() => {
    if (updateStatus) {
      navigate('/')
    }

    return () => dispatch({ type: POSTS_UPDATE, payload: null })
  }, [updateStatus, navigate, dispatch])

  useEffect(() => {
    if (errorMessage) {
      setModalShow(true)
    }

    return () => dispatch({ type: POSTS_ERROR, payload: "" })
  }, [errorMessage, dispatch])

  return (
    <Container className="w-50" style={{ marginTop: "100px", marginBottom:"30px" }}>
      <h1 style={{ color: 'rgba(59,7,11,255)', fontWeight: "bold", fontSize: "35px", textAlign: "center" }}>RT {wargas.rt}/RW {wargas.rw} Kel. {wargas.kelurahan}</h1>
      <h1 style={{ color: 'rgba(59,7,11,255)', fontWeight: "bold", marginTop: "80px", fontSize: "35px", textAlign: "center" }}>Ubah Informasi Kegiatan</h1>
      <Form onSubmit={editPost} style={{ borderColor: 'rgba(59,7,11,255)', marginTop: "25px" }}>
        <Form.Group >
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "5px" }}>Nama Kegiatan</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Nama Kegiatan"
            value={name}
            onChange={(e) => setName(e.target.value)}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "5px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Deskripsi Kegiatan</Form.Label>
          <Form.Control
            name="deskripsi"
            as="textarea"
            rows={8}
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "5px" }}
          />
          <Form.Group>
            <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Kategori Kegiatan</Form.Label>
            <Form.Control
              name="kategori"
              as="select"
              value={kategori}
              onChange={(e) => setKategori(e.target.value)}
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
            value={lokasi}
            onChange={(e) => setLokasi(e.target.value)}
            placeholder="Lokasi Kegiatan"
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "5px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Biaya Iuran Kegiatan</Form.Label>
          <Form.Control
            name="biaya"
            type="number"
            value={biaya}
            onChange={(e) => setBiaya(e.target.value)}
            placeholder="Biaya Iuran Kegiatan"
            style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "5px" }}
          />
          <Form.Label style={{ color: 'rgba(59,7,11,255)', marginTop: "10px" }}>Link Gambar Kegiatan</Form.Label>
          <Form.Control
            name="imageUrl"
            type="text"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            placeholder="Link Gambar Kegiatan"
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
          Ubahkan
        </Button>
      </Form>
      {modalShow && (
        <MyModalsWrong show={modalShow} onHide={() => setModalShow(false)} title='Warning!' content='All fields must be filled' />
      )}
    </Container>
  );
}
