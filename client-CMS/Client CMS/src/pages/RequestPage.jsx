import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchRegists, fetchRequests, fetchWargas } from "../store/action/actionCreator";
import LoadingScreen from "../components/LoadingScreen";
import { useEffect } from "react";
import RegisterRequestRow from "../components/RegisterRequestRow";
import ServiceRequestRow from "../components/ServiceRequestRow";

export default function RequestPage() {
  const { regists, loading } = useSelector(
    (state) => state.regist
  );
  const { requests } = useSelector(
    (state) => state.request
  );
  const { wargas } = useSelector(
    (state) => state.warga
  );
  console.log(regists)
  console.log(requests)
  const dispatch = useDispatch();
  useEffect(() => dispatch(fetchRegists()), [dispatch]);
  useEffect(() => dispatch(fetchRequests()), [dispatch]);
  useEffect(() => dispatch(fetchWargas()), [dispatch]);
    return (
      <>
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
          Request Registrasi Warga RT {wargas.rt}/RW {wargas.rw} Kel. {wargas.kelurahan}
        </h1>
        <div className="warga-row" style={{ overflowX: "auto" }}>
          <Table  striped bordered hover style={{ marginTop: "20px", whiteSpace: "nowrap" }}>
            <thead style={{backgroundColor: "rgba(59,7,11,255)",  color:'white'}}>
              <tr>
                <th>No</th>
                <th>Jenis Request Warga</th>
                <th>Nama Lengkap Warga</th>
                <th>Status Request</th>
                <th></th>
              </tr>
            </thead>
            <tbody >
            {regists.map((regist, index) => {
              return <RegisterRequestRow regist={regist} key={regist.id} index={index} />;
            })
            }
            </tbody>
          </Table>
        </div>
      </>
      )}
      </Container>

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
          Request Layanan Warga RT {wargas.rt}/RW {wargas.rw} Kel. {wargas.kelurahan}
        </h1>
        <div className="warga-row" style={{ overflowX: "auto" }}>
          <Table  striped bordered hover style={{ marginTop: "20px", whiteSpace: "nowrap" }}>
            <thead style={{backgroundColor: "rgba(59,7,11,255)",  color:'white'}}>
              <tr>
                <th>No</th>
                <th>Jenis Request Warga</th>
                <th>Nama Lengkap Warga</th>
                <th>Status Request</th>
                <th></th>
              </tr>
            </thead>
            <tbody >
            {requests.map((request, index) => {
              return <ServiceRequestRow request={request} key={request.id} index={index} />;
            })
            }
  
            </tbody>
          </Table>
        </div>
        </>
        )}
      </Container>
      </>
      
    )
}
  