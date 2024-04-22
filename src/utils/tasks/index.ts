import { addTask, updateTask, removeTask } from "../../services/api/services/goodMonday.service";


const taskListCrudAction = async (taskList) => {
<<<<<<< HEAD
    const ids = [];
    for (task in taskList)
    {
        if (item.type === "ADD_TASK")
        {
            const addedTask = await addTask(item.task);
            ids.push(addedTask);
        }
    }
=======
    const taskPromises = await Promise.all(taskList.map(async (action) => {
        if (action.type === 'ADD_TODO') {
            return addTask(action.task);
        }
        if (action.type === 'EDIT_TODO') {
            return updateTask(action.task.id, action.task);
        }
        // if (action.type === 'EDIT_TODO') {
        //     updateTask();
        // }
    }))
    return taskPromises;
>>>>>>> 77742ed... chore(tasks): prettier format
}


export { taskListCrudAction }