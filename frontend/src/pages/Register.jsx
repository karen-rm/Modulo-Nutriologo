import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";

export const Register = () => {
  const navigate = useNavigate();

  // TODO:  Implementar validación de contraseña
  const validatePassword = (password) => {};

  // TODO: Implementar validación de campos
  const validateFields = () => {};

  const handleSubmit = async (e) => { 
    e.preventDefault();
    const credentials = {
      firstName: e.target.inputFirstName.value,
      lastName: e.target.inputLastName.value,
      middleName: e.target.inputMiddleName.value,
      email: e.target.inputEmail.value,
      password: e.target.inputPassword.value,
      confirmPassword: e.target.inputConfirmPassword.value,
      phoneNumber: e.target.inputPhoneNumber.value,
    };
    console.log(JSON.stringify(credentials));
    navigate("/");
  };

  return (
    <MainLayout>
      <div
        className="d-flex justify-content-center align-items-center min-h-screen"
        style={{ backgroundColor: "#f8f9fa" }}
      >
        <div className="card p-4" style={{ width: "400px" }}>
          <form className="form-signin" onSubmit={handleSubmit}>
            <h1 className="h3 mb-3 font-weight-normal text-center">NutriApp</h1>
            <img
              className="mb-4 mx-auto d-block"
              src={logo}
              alt=""
              width="72"
              height="72"
            />
            <h2 className="h5 mb-3 font-weight-normal text-center">
              Registrate
            </h2>

            <label htmlFor="inputFirstName" className="sr-only">
              Nombre
            </label>
            <input
              type="text"
              id="inputFirstName"
              className="form-control mb-3"
              required=""
              autoFocus=""
            />

            <label htmlFor="inputLastName" className="sr-only">
              Apellido Paterno
            </label>
            <input
              type="text"
              id="inputLastName"
              className="form-control mb-3"
              required=""
            />

            <label htmlFor="inputMiddleName" className="sr-only">
              Apellido Materno
            </label>
            <input
              type="text"
              id="inputMiddleName"
              className="form-control mb-3"
              required=""
            />

            <label htmlFor="inputPhoneNumber" className="sr-only">
              Número de Teléfono
            </label>
            <input
              type="number"
              id="inputPhoneNumber"
              className="form-control mb-3"
              required=""
            />
            <label htmlFor="inputState" className="sr-only">
              Estado
            </label>
            <select id="inputState" className="form-control mb-3" required="">
              <option value="">Selecciona tu estado</option>
              <option value="Aguascalientes">Aguascalientes</option>
              <option value="Baja California">Baja California</option>
              <option value="Baja California Sur">Baja California Sur</option>
              <option value="Campeche">Campeche</option>
              <option value="Chiapas">Chiapas</option>
              <option value="Chihuahua">Chihuahua</option>
              <option value="Ciudad de México">Ciudad de México</option>
              <option value="Coahuila">Coahuila</option>
              <option value="Colima">Colima</option>
              <option value="Durango">Durango</option>
              <option value="Estado de México">Estado de México</option>
              <option value="Guanajuato">Guanajuato</option>
              <option value="Guerrero">Guerrero</option>
              <option value="Hidalgo">Hidalgo</option>
              <option value="Jalisco">Jalisco</option>
              <option value="Michoacán">Michoacán</option>
              <option value="Morelos">Morelos</option>
              <option value="Nayarit">Nayarit</option>
              <option value="Nuevo León">Nuevo León</option>
              <option value="Oaxaca">Oaxaca</option>
              <option value="Puebla">Puebla</option>
              <option value="Querétaro">Querétaro</option>
              <option value="Quintana Roo">Quintana Roo</option>
              <option value="San Luis Potosí">San Luis Potosí</option>
              <option value="Sinaloa">Sinaloa</option>
              <option value="Sonora">Sonora</option>
              <option value="Tabasco">Tabasco</option>
              <option value="Tamaulipas">Tamaulipas</option>
              <option value="Tlaxcala">Tlaxcala</option>
              <option value="Veracruz">Veracruz</option>
              <option value="Yucatán">Yucatán</option>
              <option value="Zacatecas">Zacatecas</option>
            </select>

            <label htmlFor="inputMiddleName" className="sr-only">
              Codigo Postal
            </label>
            <input
              type="number"
              id="inputMiddleName"
              className="form-control mb-3"
              required=""
            />

            <label htmlFor="inputMiddleName" className="sr-only">
              Cedúla Profesional
            </label>
            <input
              type="number"
              id="inputMiddleName"
              className="form-control mb-3"
              required=""
            />

            <label htmlFor="inputEmail" className="sr-only">
              Correo electrónico
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control mb-3"
              required="true"
            />

            <label htmlFor="inputPassword" className="sr-only">
              Contraseña
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control mb-3"
              required=""
            />
            <p className="text-gray-200">
              La contraseña debe tener minimo 8 caracteres-
            </p>

            <label htmlFor="inputConfirmPassword" className="sr-only">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="inputConfirmPassword"
              className="form-control mb-3"
              required=""
            />

            <div className="d-flex flex-column align-items-center">
              <button className="btn btn-lg btn-primary mb-2" type="submit">
                Registrarse
              </button>
            </div>
            <p className="mt-5 mb-3 text-muted text-center">© 2024</p>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Register;
