import { Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';
import LoginPage from './components/login';
import Dashboard from './pages/Dashboard/index';
import Profile from './pages/Profile';
import Cabañas from './pages/Cabañas';
import Settings from './pages/Settings';
import Reportes from './pages/Reportes';
import Facturas from './pages/Facturas'; 
import EstadoCuentas from './pages/EstadoCuentas';
import Mantenimiento from './pages/Mantenimiento';
import Configuraciones from './pages/Configuraciones';
import Disponibilidad from './pages/Disponibilidad';
import Empleados from './pages/Empleados'; 
import RegistrarEmpleado from './pages/RegistrarEmpleado'; 
import IngresoEmpleados from './pages/IngresoEmpleados';
import Proveedores from './pages/Proveedores'; 
import RegistrarProveedor from './pages/RegistrarProveedor'; 
import PersonalCabanas from './pages/PersonalCabanas';
import RegistrarPersonal from './pages/RegistrarPersonal';
import PrivateRoute from './components/PrivateRoute';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { useState, createContext } from 'react';
import './App.css';

export const ColorModeContext = createContext({ toggleColorMode: () => {} });

const App = () => {
  const { user } = useAuth();
  const [mode, setMode] = useState('light');

  const colorMode = {
    toggleColorMode: () => {
      setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
    },
  };

  const theme = createTheme({
    palette: {
      mode,
      primary: {
        main: '#4CAF50', // Verde
      },
      secondary: {
        main: '#FFC107',
      },
      background: {
        default: mode === 'light' ? '#F5F5F5' : '#121212',
      },
      text: {
        primary: mode === 'light' ? '#212121' : '#FFFFFF',
      },
    },
  });

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <div className='contenedor-principal'>
          <Routes>
            <Route
              path="/"
              element={user ? <Navigate to="/dashboard" replace /> : <LoginPage />}
            />
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            />
            <Route
              path="/profile"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/cabanas"
              element={
                <PrivateRoute>
                  <Cabañas />
                </PrivateRoute>
              }
            />
            <Route
              path="/settings"
              element={
                <PrivateRoute>
                  <Settings />
                </PrivateRoute>
              }
            />
            <Route
              path="/reportes"
              element={
                <PrivateRoute>
                  <Reportes />
                </PrivateRoute>
              }
            />
            <Route
              path="/facturas"
              element={
                <PrivateRoute>
                  <Facturas />
                </PrivateRoute>
              }
            />
            <Route
              path="/estado-cuentas"
              element={
                <PrivateRoute>
                  <EstadoCuentas />
                </PrivateRoute>
              }
            />
            <Route
              path="/mantenimiento"
              element={
                <PrivateRoute>
                  <Mantenimiento />
                </PrivateRoute>
              }
            />
            <Route
              path="/configuraciones"
              element={
                <PrivateRoute>
                  <Configuraciones />
                </PrivateRoute>
              }
            />
            <Route
              path="/disponibilidad"
              element={
                <PrivateRoute>
                  <Disponibilidad />
                </PrivateRoute>
              }
            />
            <Route
              path="/empleados"
              element={
                <PrivateRoute>
                  <Empleados />
                </PrivateRoute>
              }
            />
            <Route
              path="/registrar-empleado"
              element={
                <PrivateRoute>
                  <RegistrarEmpleado />
                </PrivateRoute>
              }
            />
            <Route
              path="/ingreso-empleados"
              element={
                <PrivateRoute>
                  <IngresoEmpleados />
                </PrivateRoute>
              }
            />
            <Route
              path="/proveedores"
              element={
                <PrivateRoute>
                  <Proveedores />
                </PrivateRoute>
              }
            />
            <Route
              path="/registrar-proveedor"
              element={
                <PrivateRoute>
                  <RegistrarProveedor />
                </PrivateRoute>
              }
            />
            <Route
              path="/personal-cabanas"
              element={
                <PrivateRoute>
                  <PersonalCabanas />
                </PrivateRoute>
              }
            />
            <Route
              path="/editar-perfil"
              element={
                <PrivateRoute>
                  <Profile />
                </PrivateRoute>
              }
            />
            <Route
              path="/registrar-personal"
              element={
                <PrivateRoute>
                  <RegistrarPersonal />
                </PrivateRoute>
              }
            />
            <Route path="*" element={<Navigate to={user ? "/dashboard" : "/"} replace />} />
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

export default App;
