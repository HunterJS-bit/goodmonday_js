import React from 'react';
import TasksPage from '../components/tasks';
import Page from '../layout/PageLayout';

function HomePage() {
  return (
    <Page>
      <TasksPage />
    </Page>
  );
}

export default HomePage;
