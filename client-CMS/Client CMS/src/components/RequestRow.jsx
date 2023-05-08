import React from "react";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";

export default function RequestRow() {

    return (
        <tr >
            <td>No</td>
            <td>Persetujuan Registrasi Akun</td>
            <td>Nama Lengkap</td>
            <td>
            <Form.Group>
            <Form.Control
                name="rt"
                as="select"
                style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
            >
                <option value="1">Pending</option>
                <option value="2">Approved</option>
                <option value="3">Processed</option>
                <option value="4">Done</option>
            </Form.Control>
        </Form.Group>
            </td>
            <td>
                <div className="d-flex gap-2 justify-content-center">
                    <Link to={`/request/delete/:requestId`}>
                        <Button 
                        style={{
                            backgroundColor:'rgba(59,7,11,255)', 
                            borderColor:'rgba(59,7,11,255)'
                        }}
                        >
                        Hapus Request
                        </Button>
                    </Link>
                </div>
            </td>
        </tr>
    );
}
