import 'bootstrap/dist/css/bootstrap.min.css';

import { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { MainLayout } from '../layouts/MainLayout';

export const Patient_details = () => {
  const [patientData, setPatientData] = useState({
    name: 'Juan',
    lastName: 'Pérez',
    address: 'Calle Ignacio',
    gender: 'Masculino',
    age: 30,
    additionalData1: 'Dato 1',
    additionalData2: 'Dato 2',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatientData({
      ...patientData,
      [name]: value,
    });
  };

  return (
    <MainLayout>
      <div className="container-fluid vh-100 d-flex flex-column justify-content-center align-items-center">
        <Container className="mt-4 p-4">
          <h1>Ficha médica</h1>
          <Row className="mt-3">
            <Col xs={12} md={8}>
              <Row className="mb-2">
                <Col>
                  <Form.Group>
                    <Form.Label>Paciente No. #01</Form.Label>
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs={12} md={6}>
                  <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control
                      type="text"
                      name="name"
                      value={patientData.name}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group>
                    <Form.Label>Apellidos</Form.Label>
                    <Form.Control
                      type="text"
                      name="lastName"
                      value={patientData.lastName}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col>
                  <Form.Group>
                    <Form.Label>Domicilio</Form.Label>
                    <Form.Control
                      type="text"
                      name="address"
                      value={patientData.address}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs={12} md={6}>
                  <Form.Group>
                    <Form.Label>Sexo</Form.Label>
                    <Form.Control
                      type="text"
                      name="gender"
                      value={patientData.gender}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group>
                    <Form.Label>Edad</Form.Label>
                    <Form.Control
                      type="number"
                      name="age"
                      value={patientData.age}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row className="mb-2">
                <Col xs={12} md={6}>
                  <Form.Group>
                    <Form.Label>Dato</Form.Label>
                    <Form.Control
                      type="text"
                      name="additionalData1"
                      value={patientData.additionalData1}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} md={6}>
                  <Form.Group>
                    <Form.Label>Dato</Form.Label>
                    <Form.Control
                      type="text"
                      name="additionalData2"
                      value={patientData.additionalData2}
                      onChange={handleChange}
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Col>
            <Col
              xs={12}
              md={4}
              className="d-flex flex-column align-items-center"
            >
              <img
                src="https://img.freepik.com/vector-premium/icono-perfil-usuario-estilo-plano-ilustracion-vector-avatar-miembro-sobre-fondo-aislado-concepto-negocio-signo-permiso-humano_157943-15752.jpg"
                alt="Foto del paciente"
                style={{
                  width: '200px',
                  height: '200px',
                  borderRadius: '50%',
                  marginBottom: '20px',
                }}
              />
              <Button
                variant="danger"
                className="mb-2"
                style={{ width: '100%' }}
              >
                Archivar
              </Button>
              <Button
                variant="primary"
                className="mb-2"
                style={{ width: '100%' }}
              >
                Editar
              </Button>
              <Button variant="primary" style={{ width: '100%' }}>
                Ver estadísticas
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </MainLayout>
  );
};

export default Patient_details;
