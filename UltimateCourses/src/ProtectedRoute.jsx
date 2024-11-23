import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = ({ authenticated, redirectTo}) => {
  if (!authenticated) {
    return <Navigate to='/' />;
  }
  return <Outlet />
    
};

export default ProtectedRoute;