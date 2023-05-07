import React from "react";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";

export default function WargaRow() {

    return (
        <tr>
            <td>No</td>
            <td>Nama Lengkap</td>
            <td>Foto</td>
            <td>NIK</td>
            <td>Status Akun</td>
            <td>Role Akun</td>
            <td>
                <div className="d-flex gap-2">
                    <Link to={`/warga/edit/:wargaId`}>
                        <Button 
                            style={{
                                backgroundColor:'white', 
                                borderColor:'rgba(59,7,11,255)',
                                color:'rgba(59,7,11,255)',
                                marginRight:'10px'
                            }}
                        >
                        Ubah Data
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
            <td>Jenis Kelamin</td>
            <td>Tempat Lahir</td>
            <td>Tanggal Lahir</td>
            <td>Nomor Telepon</td>
            <td>Email</td>
            <td>Agama</td>
            <td>Pekerjaan</td>
            <td>Status Perkawinan</td>
            <td>Status Keluarga</td>
            <td>KTP</td>
            <td>Akta</td>
            <td>Nomor Kartu Keluarga</td>
            <td>Kartu Keluarga</td>
        </tr>
    );
}
