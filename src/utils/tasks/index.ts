import { addTask, updateTask, removeTask } from '../../services/api/services/goodMonday.service';

const taskListCrudAction = async (taskList: any) => {
  for (let item of taskList)
  {
    if (item?.type === 'EDIT')
    {
      if (!item.id)
      {
        await addTask(item?.task);
      } else
      {
        await updateTask(item.id, item.task);
      }
    }
    if (item?.type === 'DELETE')
    {
      await removeTask(item.id);
    }
  }
};

export { taskListCrudAction };
