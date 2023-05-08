import React from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Table from "react-bootstrap/Table";
import { Link } from "react-router-dom";
import RequestRow from "../components/RequestRow";

export default function RequestPage() {

    return (
      <Container style={{ marginTop: "100px" }}>
      <>
        <h1
          style={{
            color: "rgba(59,7,11,255)",
            marginTop: "120px",
            fontSize: "35px",
            textAlign:"center",
            fontWeight: "bold"
          }}
        >
          Request Warga RT X
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
              <RequestRow />
              <RequestRow />
              <RequestRow />
              <RequestRow />
              <RequestRow />
              <RequestRow />
              <RequestRow />
              <RequestRow />
              <RequestRow />
            </tbody>
          </Table>
        </div>
      </>
      </Container>
    )
}
  