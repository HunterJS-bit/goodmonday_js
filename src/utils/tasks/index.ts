import { addTask, updateTask, removeTask } from "../../services/api/services/goodMonday.service";


const taskListCrudAction = async (taskList) => {
    const ids = [];
    for (task in taskList)
    {
        if (item.type === "ADD_TASK")
        {
            const addedTask = await addTask(item.task);
            ids.push(addedTask);
        }
    }
}


export { taskListCrudAction }