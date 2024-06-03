import { Navigate } from 'react-router-dom';

const OpenRoute = ({ children }) => {
    const token = localStorage.getItem("token");
    return !token ? children : <Navigate to="/dashboard" />;
};

export default OpenRoute;