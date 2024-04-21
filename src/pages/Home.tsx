import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';


const HomePage = () => {

  const { loggedUser } = useAuth();

  if (!loggedUser) {
    return <Navigate to="/login" replace />;
  }

  return <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 mt-4 rounded">

    Click Me

  </button>;
}

export default HomePage;
