import React, { useEffect, useState } from 'react';
import { getTasks } from '../../services/api/services/goodMonday.service';
import TaskList from './List/TaskList';

function TasksPage() {
  const [taskList, setTaskList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try
    {
      setLoading(true)
      const { items } = await getTasks();
      setTaskList(items);
      setLoading(false);
    } catch (error)
    {
      console.error('Error fetching tasks:', error);
    }
  }

  if (loading)
  {
    return <div>Loading...</div>;
  }
  const taskListProps = { tasks: taskList, reloadTaskList: fetchTasks };
  return <TaskList {...taskListProps} />;
}

export default TasksPage;
