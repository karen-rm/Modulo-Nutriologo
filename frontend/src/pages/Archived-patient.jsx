import 'bootstrap/dist/css/bootstrap.min.css';

import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { MainLayout } from '../layouts/MainLayout';

export const Archived_patient = () => {
  return (
    <MainLayout>
      <div className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center">
        <Container
          className="mt-4 p-4"
          style={{ backgroundColor: '#e0e0e0', borderRadius: '10px' }}
        >
          <h4>Pacientes archivados</h4>
          <Row className="mt-3">
            <Col md={12}>
              {/* lista de tarjetas para cada "paciente" en el arreglo  */}
              {[1, 2, 3, 4].map((patient, index) => (
                <Card
                  className="mb-3"
                  key={index}
                  style={{ backgroundColor: '#f2f2f2', borderRadius: '10px' }}
                >
                  <Card.Body className="d-flex justify-content-between align-items-center">
                    <Card.Text
                      className="mb-0"
                      style={{ fontStyle: 'italic', fontSize: '18px' }}
                    >
                      Paciente {patient}
                    </Card.Text>
                    <Button
                      variant="primary"
                      size="lg"
                      style={{ borderRadius: '10px' }}
                    >
                      Desarchivar
                    </Button>
                  </Card.Body>
                </Card>
              ))}
            </Col>
          </Row>
        </Container>
      </div>
    </MainLayout>
  );
};

export default Archived_patient;
