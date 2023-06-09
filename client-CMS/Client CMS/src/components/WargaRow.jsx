import React from "react";
import Button from "react-bootstrap/Button"
import { Link } from "react-router-dom";

export default function WargaRow({ warga, index }) {
    // console.log(warga)
    return (
        <tr >
            <td>{++index}</td>
            <td>{warga.namaLengkap}</td>
            <td><img src={warga.photoUrl} style={{width:"100px"}}alt="img"/></td>
            <td>{warga.email}</td>
            <td>{warga.status}</td>
            <td>{warga.role}</td>
            <td>
                <div className="d-flex justify-content-center">
                    <Link to={`/warga/detail/${warga.id}`}>
                        <Button 
                            style={{
                                backgroundColor:'white', 
                                borderColor:'rgba(59,7,11,255)',
                                color:'rgba(59,7,11,255)',
                                marginRight:'10px',
                                fontSize:"15px",    
                                fontWeight: "bold",
                            }}
                            onMouseOver={(e) => e.target.style.backgroundColor = "#c4b5b6"} 
                            onMouseOut={(e) => e.target.style.backgroundColor = "white"}
                        >
                        Lihat Detil
                        </Button>
                    </Link>
                    <Link to={`/warga/edit/${warga.id}`}>
                        <Button 
                            style={{
                                backgroundColor:'grey', 
                                borderColor:'rgba(59,7,11,255)',
                                color:'white',
                                marginRight:'10px',
                                fontSize:"15px",
                                fontWeight: "bold",
                            }}
                            onMouseOver={(e) => e.target.style.color = "#c4b5b6"} 
                            onMouseOut={(e) => e.target.style.color = "white"}
                        >
                        Ubah Detil
                        </Button>
                    </Link>
                    <Link to={`/warga/delete/${warga.id}`}>
                        <Button 
                        style={{
                            backgroundColor:'rgba(59,7,11,255)', 
                            borderColor:'rgba(59,7,11,255)',
                            fontSize:"15px",
                            fontWeight: "bold",
                        }}
                        onMouseOver={(e) => e.target.style.color = "#c4b5b6"} 
                        onMouseOut={(e) => e.target.style.color = "white"}
                        >
                        Hapus Data
                        </Button>
                    </Link>
                </div>
            </td>
        </tr>
    );
}
