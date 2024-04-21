import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const ProtectedRoute = () => {
    const { loggedUser } = useAuth();

    if (!loggedUser) {
        return <Navigate to="/login" replace />;
    }


    return (<Outlet />)

};

export default ProtectedRoute;