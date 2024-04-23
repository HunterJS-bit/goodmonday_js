import React, { useEffect, useState } from 'react';
import { getTasks } from '../../services/api/services/goodMonday.service';
import TaskList from './List/TaskList';

function TasksPage() {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const { items } = await getTasks();
        setTaskList(items);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching tasks:', error);
      }
    };

    fetchTasks();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  return <TaskList tasks={taskList} />;
}

export default TasksPage;
