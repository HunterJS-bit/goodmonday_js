import React from 'react';
import { Navigate, Route } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';


const ProtectedRoute = ({ element, ...rest }) => {
    const { loggedUser } = useAuth();

    if (!loggedUser)
    {
        return <Navigate to="/login" replace />;
    }

    return <Route {...rest} element={element} />;
};

export default ProtectedRoute;