import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './helpers/ProtectedRoute';
import {
  Archived_patient,
  Dashboard,
  Home,
  Login,
  PacientesPanel,
  Patient_details,
  PatientRegister,
  RegimenesPanel,
  Register,
} from './pages/';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Login />,
  },
  {
    path: 'register',
    element: <Register />,
  },
  {
    path: '/home',
    element: (
      <ProtectedRoute>
        <Home />
      </ProtectedRoute>
    ),
  },
  {
    path: '/dashboard',
    element: (
      <ProtectedRoute>
        <Dashboard />
      </ProtectedRoute>
    ),
  },
  {
    path: '/regimenes',
    element: (
      <ProtectedRoute>
        <RegimenesPanel />
      </ProtectedRoute>
    ),
  },
  {
    path: '/pacientes',
    element: (
      <ProtectedRoute>
        <PacientesPanel />
      </ProtectedRoute>
    ),
  },
  {
    path: '/PatientRegister',
    element: (
      <ProtectedRoute>
        <PatientRegister />
      </ProtectedRoute>
    ),
  },
  {
    path: '/archived_patient',
    element: (
      <ProtectedRoute>
        <Archived_patient />
      </ProtectedRoute>
    ),
  },
  {
    path: '/patient_details',
    element: (
      <ProtectedRoute>
        <Patient_details />
      </ProtectedRoute>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
