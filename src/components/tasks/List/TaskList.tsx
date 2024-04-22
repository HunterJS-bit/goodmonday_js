import React, { useReducer } from 'react';
import PropTypes from 'prop-types';
import { taskReducer, initialState } from '../../../reducers/taskReducer';
import { taskListCrudAction } from '../../../utils/tasks';
import { Task } from '../../../interfaces/Task';
import TaskItem from './item/TaskItem';


type TaskListProps = {
    tasks: Task[]
}

const TaskList: React.FC<TaskListProps> = ({ tasks }) => {

    const [state, dispatch] = useReducer(taskReducer, { ...initialState, tasks });


    const onAddTask = () => {
        dispatch({ type: "ADD_TODO", title: 'asdsds' });
    }

    const onUndo = () => {
        dispatch({ type: "UNDO" })
    }

    const onRedo = () => {
        dispatch({ type: "REDO" })
    }

    const onEditTask = (index: number, done: boolean, title: string) => {
        dispatch({ type: 'EDIT_TODO', index, done, title })
    }

    const onDeleteTask = (index: number) => {
        dispatch({ type: "DELETE_TODO", index })
    }

    const onConfirm = async () => {
        const { pendingChanges } = state;
        await taskListCrudAction(pendingChanges);
    }

    return (
        <>
            <div className="mt-8 mb-3">
                <button
                    className={`border-2 border-red-500 p-2 text-red-500 ${!state.prevState && 'cursor-not-allowed opacity-50'}`}
                    onClick={onUndo}
                    disabled={!state.prevState}
                >      ← Undo</button>
                <button
                    className={`border-2 border-indigo-500 p-2 text-indigo-500 ml-4 ${!state.nextState && 'cursor-not-allowed opacity-50'}`}
                    onClick={onRedo}
                    disabled={!state.nextState}
                > Redo →</button>
            </div>
            <button
                className="border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex"
                onClick={onAddTask}
            >
                <svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="9" />  <line x1="9" y1="12" x2="15" y2="12" />  <line x1="12" y1="9" x2="12" y2="15" /></svg>
                <span>Add</span>
            </button>
            <div className='pt-5'>
                {state.tasks.map((task: Task, i: number) => (
                    <TaskItem
                        key={i}
                        text={task.title}
                        isCompleted={task.done}
                        onEdit={(done: boolean, text: string) => onEditTask(i, done, text)}
                        onCheck={() => onEditTask(i, !task.done, task.title)}
                        onRemove={() => onDeleteTask(i)}
                    />
                ))}
            </div>

            <div className='pt-5'>
                <button
                    className={`border-2 border-gray-500 p-2 trounded-lg flex ${!state.tasks?.length && 'cursor-not-allowed opacity-50'}`}
                    onClick={onConfirm}
                >
                    <span>Confirm Changes</span>
                </button>
            </div>
        </>

    )

};

export default TaskList;