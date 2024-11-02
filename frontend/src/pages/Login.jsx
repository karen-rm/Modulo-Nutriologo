import "bootstrap/dist/css/bootstrap.min.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import { MainLayout } from "../layouts/MainLayout";
import { useAuth } from "../hooks/useAuth";
import { useEffect } from "react";

export const Login = () => {
  const navigate = useNavigate();
  const { signin, isAuthenticated } = useAuth();

  useEffect(() => {
    if (isAuthenticated) {
      navigate("/dashboard");
    } 
  }, [isAuthenticated, navigate]);

 const handleSubmit = async (e) => {
    e.preventDefault();
    const credentials = {
      email: e.target.inputEmail.value,
      password: e.target.inputPassword.value,
    };
    await signin(credentials);
  };

  return (
    <MainLayout>
      <div
        className="d-flex justify-content-center align-items-center vh-100"
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
              Inicia sesión
            </h2>
            <label htmlFor="inputEmail" className="sr-only">
              Correo electrónico
            </label>
            <input
              type="email"
              id="inputEmail"
              className="form-control mb-3"
              placeholder=""
              required=""
              autoFocus=""
            />
            <label htmlFor="inputPassword" className="sr-only">
              Contraseña
            </label>
            <input
              type="password"
              id="inputPassword"
              className="form-control mb-3"
              placeholder=""
              required=""
            />
            <div className="d-flex flex-column align-items-center">
              <button className="btn btn-lg btn-primary mb-2" type="submit">
                Acceder
              </button>
              <Link to="/register" className="btn btn-link">
                Registrarse
              </Link>
            </div>
            <p className="mt-5 mb-3 text-muted text-center">© 2024</p>
          </form>
        </div>
      </div>
    </MainLayout>
  );
};

export default Login;
