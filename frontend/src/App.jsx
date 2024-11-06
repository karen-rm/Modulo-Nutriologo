import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './helpers/ProtectedRoute';
import {
  Archivadosp,
  Dashboard,
  Fichamedica,
  Home,
  Login,
  PatientsPanel,
  PatientRegister,
  RegimesPanel,
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
    path: '/Regimes-panel',
    element: (
      <ProtectedRoute>
        <RegimesPanel />
      </ProtectedRoute>
    ),
  },
  {
    path: '/Patients-panel',
    element: (
      <ProtectedRoute>
        <PatientsPanel />
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
    path: '/archivadosp',
    element: (
      <ProtectedRoute>
        <Archivadosp />
      </ProtectedRoute>
    ),
  },
  {
    path: '/fichamedica',
    element: (
      <ProtectedRoute>
        <Fichamedica />
      </ProtectedRoute>
    ),
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
