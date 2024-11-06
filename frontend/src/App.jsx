import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ProtectedRoute from './helpers/ProtectedRoute';
import { Dashboard, Home, Login, Register } from './pages/';
import Archivadosp from './pages/Archivadosp';
import Fichamedica from './pages/Fichamedica';

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
