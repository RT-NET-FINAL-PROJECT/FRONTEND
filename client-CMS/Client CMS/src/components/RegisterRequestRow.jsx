import React, { useEffect, useState } from "react";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { useDispatch } from "react-redux";
import { approveUser } from "../store/action/actionCreator";

export default function RegisterRequestRow({ regist, index }) {
    const [status, setStatus] = useState(regist.status);
    const dispatch = useDispatch()

    const selectHandler = (e) =>{
        setStatus(e.target.value)
    }

    useEffect(() =>{
        dispatch(approveUser(status, regist.User.id, regist.id))
    }, [status])

    return (
        <tr >
            <td>{++index}</td>
            <td>{regist.keterangan}</td>
            <td>{regist.User.namaLengkap}</td>
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
