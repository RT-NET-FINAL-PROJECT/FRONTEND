import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { updateServiceStatus } from "../store/action/actionCreator";
import Swal from 'sweetalert2';

export default function ServiceRequestRow({ request, index }) {
    const [status, setStatus] = useState(request.status);
    const dispatch = useDispatch()

    const selectHandler = (e) => {
        setStatus(e.target.value)
    }

    useEffect(() => {
        const updateStatus = async () => {
            try {
                await dispatch(updateServiceStatus(status, request.Service.id, request.id));
                if (request.status === "pending" && status !== "pending") {
                    Swal.fire({
                        icon: "success",
                        iconColor: 'rgba(59,7,11,255)',
                        title: "Status layanan berhasil diubah!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
                if (request.status === "in progress" && status !== "in progress") {
                    Swal.fire({
                        icon: "success",
                        iconColor: 'rgba(59,7,11,255)',
                        title: "Status layanan berhasil diubah!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
                if (request.status === "done" && status !== "done") {
                    Swal.fire({
                        icon: "success",
                        iconColor: 'rgba(59,7,11,255)',
                        title: "Status layanan berhasil diubah!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            } catch (error) {
                console.log(error);
                // handle error here
            }
        };
        updateStatus();
    }, [status]);

    return (
        <tr >
            <td>{++index}</td>
            <td>{request.User.namaLengkap}</td>
            <td>{request.Service.name}</td>
            <td>{request.keperluan}</td>
            <td>
                <Form.Group>
                    <Form.Control value={status} onChange={selectHandler}
                        name="rt"
                        as="select"
                        style={{ color: 'rgba(59,7,11,255)', border: "1px solid rgba(59,7,11,255)", marginTop: "2px" }}
                    >
                        <option style={{ color: 'rgba(59,7,11,255)' }} value="pending">Pending</option>
                        <option style={{ color: 'rgba(59,7,11,255)' }} value="in progress">In Progress</option>
                        <option style={{ color: 'rgba(59,7,11,255)' }} value="done">Done</option>
                        <style>
                            {`
                    option:hover {
                        background-color: red;
                    }
                `}
                        </style>
                    </Form.Control>
                </Form.Group>
            </td>
            <td>
                <div className="d-flex gap-2 justify-content-center">
                    <Link to={`/request/delete/${request.id}`}>
                        <Button
                            style={{
                                backgroundColor: 'rgba(59,7,11,255)',
                                borderColor: 'rgba(59,7,11,255)',
                                fontWeight: 'bold'
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
