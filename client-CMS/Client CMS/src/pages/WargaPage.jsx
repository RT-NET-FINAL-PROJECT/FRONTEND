import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import WargaRow from "../components/WargaRow";
import { useDispatch, useSelector } from "react-redux";
import { fetchWargas } from "../store/action/actionCreator";
import LoadingScreen from "../components/LoadingScreen";
import { useEffect } from "react";

export default function WargaPage() {
  const dispatch = useDispatch();
  
  useEffect(() => dispatch(fetchWargas()), [dispatch]);
  const { wargas, loading } = useSelector(
    (state) => state.warga
  );

  return (
    <Container style={{ marginTop: "100px" }}>
    {loading ? <LoadingScreen /> : (
      <>
        <h1
          style={{
            color: "rgba(59,7,11,255)",
            marginTop: "120px",
            fontSize: "30px",
            textAlign:"center",
            fontWeight: "bold"
          }}
        >
          Data Warga RT {wargas.rt}/RW {wargas.rw} Kel. {wargas.kelurahan}
        </h1>
        <div
          className="myButton"
          style={{ marginBottom: "5px", textAlign: "right" }}
        >
          <Button
            as={Link}
            to={"/warga/add"}
            style={{
              marginTop: "30px",
              backgroundColor: "rgba(59,7,11,255)",
              borderColor: "rgba(59,7,11,255)",
            }}
          >
            + Tambahkan Data Warga
          </Button>
        </div>
        <div className="warga-row" style={{ overflowX: "auto" }}>
          <Table  striped bordered hover style={{ marginTop: "20px", whiteSpace: "nowrap" }}>
            <thead style={{backgroundColor: "rgba(59,7,11,255)",  color:'white'}}>
              <tr>
                <th>No</th>
                <th>Nama Lengkap</th>
                <th>Foto</th>
                <th>Email</th>
                <th>Status Akun</th>
                <th>Akun</th>
                <th></th>
              </tr>
            </thead>
            <tbody >
                {wargas.Users.map((warga, index) => {
                    return <WargaRow warga={warga} key={warga.id} index={index} />;
                  })}
            </tbody>
          </Table>
        </div>
        </>
      )}
    </Container>
  );
}
