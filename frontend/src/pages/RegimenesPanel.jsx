import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Container, Row, Col } from 'react-bootstrap';
import { MainLayout } from "../layouts/MainLayout";

export const RegimenesPanel = () => {
  // Datos de prueba para los regímenes
  const regimenes = [
    { id: 1, nombre: 'Regimen 1' },
    { id: 2, nombre: 'Regimen 2' },
    { id: 3, nombre: 'Regimen 3' },
    { id: 4, nombre: 'Regimen 4' },
  ];

  return (
    <MainLayout>

      <Container className='container-fluid vh-100 d-flex flex-column justify-content-center align-items-center'>
      <Row className="my-4">
        <Col xs={12}>
          <h2 className="text-center">Regímenes Panel</h2>
        </Col>
      </Row>

      <Row className="my-2">
        <Col xs={6}>
          <Button variant="secondary">Archivados</Button>
        </Col>
        <Col xs={6} className="text-end">
          <Button variant="primary">Añadir</Button>
        </Col>
      </Row>

      <Row className="my-4">
        {regimenes.map((regimen) => (
          <Col xs={12} key={regimen.id} className="mb-3">
            <div className="d-flex align-items-center justify-content-between p-3 shadow-sm" style={{ backgroundColor: '#f8f9fa' }}>
              <span>{regimen.nombre}</span>
              <div>
                <Button variant="info" className="me-2">Ver detalles</Button>
                <Button variant="danger">Archivar</Button>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
    </MainLayout>
    
  );
};

export default RegimenesPanel;
