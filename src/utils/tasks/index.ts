import { addTask, updateTask, removeTask } from '../../services/api/services/goodMonday.service';

const taskListCrudAction = async (taskList: any) => {
  for (let item of taskList)
  {
    switch (item?.type)
    {
      case 'ADD':
        await addTask(item?.task);
        break;
      case 'EDIT':
        if (!item.id)
        {
          await addTask(item?.task);
        } else
        {
          await updateTask(item.id, item.task);
        }
        break;
      case 'DELETE':
        await removeTask(item.id);
        break;
      default:
        break;
    }
  }
};

export { taskListCrudAction };
