import React from 'react';
import { Navigate } from 'react-router-dom';
import TasksPage from '../components/tasks';

import { useAuth } from '../context/AuthContext';
import Page from '../layout/PageLayou';



const HomePage = () => {

  const { loggedUser } = useAuth();

  if (!loggedUser) {
    return <Navigate to="/login" replace />;
  }

  return (<Page>
    <TasksPage />
  </Page>);
}

export default HomePage;
