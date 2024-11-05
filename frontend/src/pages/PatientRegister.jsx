import "bootstrap/dist/css/bootstrap.min.css";
import React, { useState } from "react";
import { MainLayout } from "../layouts/MainLayout";


export const PatientRegister = () => {

  const [formData, setFormData] = useState({
    nombre: "",
    apellidos: "",
    fechaNacimiento: "",
    altura: "",
    peso: "",
    correo: "",
    contraseña: "",
    genero: "",
    actividadFisica: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar el envío del formulario, como enviarlo a un servidor
    console.log("Datos del formulario:", formData);
  };

  return(
    <MainLayout>
      <div className="container mt-5">
      <h2 className="text-center mb-4">Formulario de Registro</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="nombre">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="apellidos">Apellidos</label>
          <input
            type="text"
            className="form-control"
            id="apellidos"
            name="apellidos"
            value={formData.apellidos}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="fechaNacimiento">Fecha de Nacimiento</label>
          <input
            type="date"
            className="form-control"
            id="fechaNacimiento"
            name="fechaNacimiento"
            value={formData.fechaNacimiento}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="altura">Altura (cm)</label>
          <input
            type="number"
            className="form-control"
            id="altura"
            name="altura"
            value={formData.altura}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="peso">Peso (kg)</label>
          <input
            type="number"
            className="form-control"
            id="peso"
            name="peso"
            value={formData.peso}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="correo">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="correo"
            name="correo"
            value={formData.correo}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contraseña">Contraseña</label>
          <input
            type="password"
            className="form-control"
            id="contraseña"
            name="contraseña"
            value={formData.contraseña}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Género</label>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="genero"
              id="generoMasculino"
              value="masculino"
              onChange={handleChange}
              checked={formData.genero === "masculino"}
              required
            />
            <label className="form-check-label" htmlFor="generoMasculino">
              Masculino
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="genero"
              id="generoFemenino"
              value="femenino"
              onChange={handleChange}
              checked={formData.genero === "femenino"}
              required
            />
            <label className="form-check-label" htmlFor="generoFemenino">
              Femenino
            </label>
          </div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="genero"
              id="generoOtro"
              value="otro"
              onChange={handleChange}
              checked={formData.genero === "otro"}
              required
            />
            <label className="form-check-label" htmlFor="generoOtro">
              Otro
            </label>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="actividadFisica">Actividad Física</label>
          <select
            className="form-control"
            id="actividadFisica"
            name="actividadFisica"
            value={formData.actividadFisica}
            onChange={handleChange}
            required
          >
            <option value="">Selecciona tu nivel de actividad</option>
            <option value="alta">Alta</option>
            <option value="moderada">Moderada</option>
            <option value="baja">Baja</option>
          </select>
        </div>

        <button type="submit" className="btn btn-primary btn-block">
          Registrar
        </button>
      </form>
    </div>
    </MainLayout>
  ); 
}

export default PatientRegister;