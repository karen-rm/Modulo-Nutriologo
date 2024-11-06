import "bootstrap/dist/css/bootstrap.min.css";
import logo from "../assets/logo.png";
import { useNavigate } from "react-router-dom";
import { MainLayout } from "../layouts/MainLayout";

export const Register = () => {
  const navigate = useNavigate();

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

            <label htmlFor="inputEmail" className="sr-only">
              Correo electrónico
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control mb-3"
              required=""
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

            <label htmlFor="inputConfirmPassword" className="sr-only">
              Confirmar Contraseña
            </label>
            <input
              type="password"
              id="inputConfirmPassword"
              className="form-control mb-3"
              required=""
            />

            <label htmlFor="inputPhoneNumber" className="sr-only">
              Número de Teléfono
            </label>
            <input
              type="tel"
              id="inputPhoneNumber"
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
