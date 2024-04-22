import { addTask, updateTask, removeTask } from "../../services/api/services/goodMonday.service";


const taskListCrudAction = async (taskList) => {
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
}


export { taskListCrudAction }