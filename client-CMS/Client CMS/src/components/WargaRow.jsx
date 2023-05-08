import React from "react";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";

export default function WargaRow() {

    return (
        <tr>
            <td>No</td>
            <td>Nama Lengkap</td>
            <td>Nomor Telepon</td>
            <td>Email</td>
            <td>NIK</td>
            <td>Status Akun</td>
            <td>Role Akun</td>
            <td>
                <div className="d-flex gap-2">
                    <Link to={`/warga/detail/:wargaId`}>
                        <Button 
                            style={{
                                backgroundColor:'white', 
                                borderColor:'rgba(59,7,11,255)',
                                color:'rgba(59,7,11,255)',
                                marginRight:'10px'
                            }}
                        >
                        Lihat Detil Data
                        </Button>
                    </Link>
                    <Link to={`/warga/delete/:wargaId`}>
                        <Button 
                        style={{
                            backgroundColor:'rgba(59,7,11,255)', 
                            borderColor:'rgba(59,7,11,255)'
                        }}
                        >
                        Hapus Data
                        </Button>
                    </Link>
                </div>
            </td>
        </tr>
    );
}
