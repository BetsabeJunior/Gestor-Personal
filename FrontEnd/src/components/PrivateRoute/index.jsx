import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';


// Componente para proteger las rutas
const PrivateRoute = ({ children }) => {
  const { user } = useAuth();

  return user ? children : <Navigate to="/" replace />;
};

export default PrivateRoute;
