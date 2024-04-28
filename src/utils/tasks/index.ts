import { addTask, updateTask, removeTask } from '../../services/api/services/goodMonday.service';
import { toast } from 'react-toastify';

const taskListCrudAction = async (taskList: any) => {
  try
  {
    const promises = taskList.map(async (item: any) => {
      switch (item?.type)
      {
        case 'ADD':
          return addTask(item?.task);
        case 'EDIT':
          return !item.id ? addTask(item?.task) : updateTask(item.id, item.task);
        case 'DELETE':
          return removeTask(item.id);
        default:
          return null;
      }
    });

    const results = await Promise.allSettled(promises);
    const hasError = results.some((result: any) => result?.value?.status !== 'ok');
    if (!hasError)
    {
      toast.success('Tasks updated successfully');
    } else
    {
      console.error('One or more promises failed');
    }
  } catch (error)
  {
    console.error('Error occurred:', error);
  }
};

export { taskListCrudAction };
