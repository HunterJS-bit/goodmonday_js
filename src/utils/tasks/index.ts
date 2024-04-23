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

    await Promise.all(promises);
    toast.success('Tasks updated, successfully');
  } catch (error)
  {
    console.error('Error occurred:', error);
  }
};

export { taskListCrudAction };
