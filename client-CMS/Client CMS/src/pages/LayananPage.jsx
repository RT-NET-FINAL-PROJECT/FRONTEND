import Container from "react-bootstrap/esm/Container";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import LayananCard from "../components/LayananCard";
import { useDispatch, useSelector } from "react-redux";
import { fetchServices, fetchWargas } from "../store/action/actionCreator";
import LoadingScreen from "../components/LoadingScreen";
import { useEffect } from "react";

export default function LayananPage() {
  const dispatch = useDispatch();

  const { services, loading } = useSelector(
    (state) => state.service
  );
    
  const { wargas } = useSelector(
    (state) => state.warga
  );
    
  useEffect(() => dispatch(fetchServices()), [dispatch]);
  useEffect(() => dispatch(fetchWargas()), [dispatch]);

  return (
    <Container style={{ marginTop: "100px" }}>
      {loading ? <LoadingScreen /> : (
        <>
          <h1 style={{ color: 'rgba(59,7,11,255)', marginTop: "120px", fontSize: "30px", textAlign: "center", fontWeight: "bold" }}>Layanan Warga RT {wargas.rt}/RW {wargas.rw} Kel. {wargas.kelurahan}</h1>
          <div className="myButton" style={{ marginBottom: "5px", textAlign: "right" }}>
            <Button
              as={Link}
              to={"/layanan/add"}
              style={{
                marginTop: "30px",
                backgroundColor: 'rgba(59,7,11,255)',
                borderColor: 'rgba(59,7,11,255)'
              }}
            >
              + Tambahkan Layanan Warga
            </Button>
          </div>
          <div style={{ marginTop: "20px" }}>
            {services.map((service) => {
              return <LayananCard service={service} key={service.id} />;
            })
            }
          </div>

        </>
      )}
    </Container>
  )
}
