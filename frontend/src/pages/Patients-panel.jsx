import React, { useState } from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { MainLayout } from '../layouts/MainLayout';

export const PatientsPanel = () => {

  const navigate = useNavigate();

  // Datos de prueba
  const [patients, setPatients] = useState([
    { id: 1, name: 'Paciente 1' },
    { id: 2, name: 'Paciente 2' },
    { id: 3, name: 'Paciente 3' },
    { id: 4, name: 'Paciente 4' },
  ]);

  const handleArchive = (id) => {
    alert(`Paciente con ID ${id} archivado`);
    // Aquí puedes implementar la lógica para archivar
  };



  return (
    <MainLayout>
      
      <Container className='container-fluid vh-100 d-flex flex-column '>
       
        <h2 className="text-center mt-5">Pacientes panel</h2>

        <Row className="my-2">
          <Col>
            <Button onClick={()=>navigate('/archived_patient')} variant="secondary" className="me-2">
              Archivados
            </Button>
            <Button onClick={()=>navigate('/Register-patient')} variant="secondary">Añadir</Button>
          </Col>
        </Row>

        <Row>
          {patients.map((patient) => (
            <Col md={6} key={patient.id} className="mb-3">
              <Card>
                <Card.Body className="d-flex justify-content-between align-items-center">
                  <div>
                    <Card.Title>{patient.name}</Card.Title>
                  </div>
                  <div>
                    <Button
                      variant="primary"
                      className="me-2"
                      onClick={() => handleArchive(patient.id)}
                    >
                      Archivar
                    </Button>
                    <Button
                      variant="success"
                      onClick={() => navigate('/patient_details')}
                    >
                      Ver detalles
                    </Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </MainLayout>
  );
};

export default PatientsPanel;
