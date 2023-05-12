import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { approveUser } from "../store/action/actionCreator";
import Swal from 'sweetalert2';

export default function RegisterRequestRow({ regist, index }) {
    const [status, setStatus] = useState(regist.status);
    const dispatch = useDispatch()

    const selectHandler = (e) =>{
        setStatus(e.target.value)
    }

    useEffect(() => {
        const updateStatus = async () => {
          try {
            await dispatch(approveUser(status, regist.User.id, regist.id));
            if (status === "approved" && regist.status === "pending") {
              Swal.fire({
                icon: "success",
                iconColor: 'rgba(59,7,11,255)',
                title: "Pendaftaran berhasil disetujui!",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          } catch (error) {
            console.log(error);
          }
        };
        updateStatus();
      }, [status]);

    return (
        <tr >
            <td>{++index}</td>
            <td>{regist.User.namaLengkap}</td>
            <td>{regist.keterangan}</td>
            <td>
            <Form.Group>
            <Form.Control value={status} onChange={selectHandler}
                name="rt"
                as="select"
                style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
            >
                <option value="pending">Pending</option>
                <option value="approved">Approved</option>
            </Form.Control>
        </Form.Group>
            </td>
            <td>
                <div className="d-flex gap-2 justify-content-center">
                    <Link to={`/request/delete/${regist.id}`}>
                        <Button 
                        style={{
                            backgroundColor:'rgba(59,7,11,255)', 
                            borderColor:'rgba(59,7,11,255)',
                            fontWeight:'bold'
                        }}
                        onMouseOver={(e) => e.target.style.color = "#c4b5b6"} 
                        onMouseOut={(e) => e.target.style.color = "white"}
                        >
                        Hapus Request
                        </Button>
                    </Link>
                </div>
            </td>
        </tr>
    );
}
