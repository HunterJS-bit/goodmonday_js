import React from 'react';
import { Navigate } from 'react-router-dom';
import TaskList from '../components/tasks/List/TaskList';
import { useAuth } from '../context/AuthContext';
import Page from '../layout/PageLayou';



const HomePage = () => {

  const { loggedUser } = useAuth();

  if (!loggedUser) {
    return <Navigate to="/login" replace />;
  }

  return (<Page>
    <TaskList />
  </Page>);
}

export default HomePage;
