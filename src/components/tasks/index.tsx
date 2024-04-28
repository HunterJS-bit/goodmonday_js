import React, { useEffect, useState, useReducer } from 'react';
import { getTasks } from '../../services/api/services/goodMonday.service';
import { SET_TASK_LIST, RESET_PENDING_CHANGES } from '../../reducers/taskActions';
import { taskReducer, initialState, Action } from '../../reducers/taskReducer';
import TaskList from './List/TaskList';

function TasksPage() {
  const [loading, setLoading] = useState(true);

  const [state, dispatch] = useReducer<React.Reducer<any, Action>>(taskReducer, {
    ...initialState,
    tasks: []
  });

  useEffect(() => {
    fetchTasks();
  }, []);

  const fetchTasks = async () => {
    try
    {
      setLoading(true)
      const { items } = await getTasks();
      dispatch({ type: RESET_PENDING_CHANGES })
      dispatch({ type: SET_TASK_LIST, tasks: items });
      setLoading(false);
    } catch (error)
    {
      console.error('Error fetching tasks:', error);
    }
  }
  const dispatchAction = (type: string, args: any) => {
    const action = { type, ...args };
    dispatch(action);
  }

  if (loading)
  {
    return <div>Loading...</div>;
  }
  const taskListProps = { state, reloadTaskList: fetchTasks, dispatch: dispatchAction };
  return <TaskList {...taskListProps} />;
}

export default TasksPage;
