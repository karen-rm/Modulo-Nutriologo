import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProtectedRoute from "./helpers/ProtectedRoute";
import { Dashboard, Home, Login, PacientesPanel, RegimenesPanel, Register } from "./pages/";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
  {
    path: "/home",
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: "/regimenes",
    element: (
      <ProtectedRoute>
        <RegimenesPanel/>
      </ProtectedRoute>
    ),
  },
  {
    path: "/pacientes",
    element: (
      <ProtectedRoute>
        <PacientesPanel/>
      </ProtectedRoute>
    ),
  },
]);



const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
