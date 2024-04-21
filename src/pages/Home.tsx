import React from 'react';
<<<<<<< HEAD
import TasksPage from '../components/tasks';
import Page from '../layout/PageLayout';
=======
import { Navigate } from 'react-router-dom';
import TaskList from '../components/tasks/List/TaskList';
import { useAuth } from '../context/AuthContext';
import Page from '../layout/PageLayou';

>>>>>>> 175d273... feat(tasks): add base crud oprations for task list



<<<<<<< HEAD
const HomePage = () => {

  return (<Page>
    <TasksPage />
=======
  return (<Page>
    <TaskList />
>>>>>>> 175d273... feat(tasks): add base crud oprations for task list
  </Page>);
}

export default HomePage;
