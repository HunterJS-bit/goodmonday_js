import React, { useReducer } from 'react';
import { taskReducer, initialState } from '../../../reducers/taskReducer';
import { getTodoItems } from '../../../services/api/services/goodMonday.service';
import TaskItem from './item/TaskItem';




const TaskList = () => {

    const [state, dispatch] = useReducer(taskReducer, initialState);

    console.log('asdasd', state)


    const onAddTask = () => {
        dispatch({ type: "ADD_TODO", text: 'as' });
    }

    return (
        <>
            <div className="mt-8 mb-3">
                <button
                    className="border-2 border-red-500 p-2 text-red-500"
                    onClick={() => dispatch({ type: "UNDO" })}
                    disabled={!state.prevState}
                >      ← Undo</button>
                <button
                    className="border-2 border-indigo-500 p-2 text-indigo-500 ml-4"
                    onClick={() => dispatch({ type: "REDO" })}
                    disabled={!state.nextState}
                > Redo →</button>
            </div>
            <button
                className="border-2 border-green-500 p-2 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex"
                onClick={onAddTask}
            >
                <svg className="h-6 w-6" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">  <path stroke="none" d="M0 0h24v24H0z" />  <circle cx="12" cy="12" r="9" />  <line x1="9" y1="12" x2="15" y2="12" />  <line x1="12" y1="9" x2="12" y2="15" /></svg>
                <span>Add</span>
            </button>
            <div className='pt-5'>
                {state.tasks.map((todo, i) => (
                    <TaskItem
                        key={i}
                        text={todo.text}
                        isCompleted={todo.isDone}
                        onCheck={() => dispatch({ type: "SET_CHECK", i, isDone: !todo.isDone })}
                        onRemove={() => dispatch({ type: "DELETE_TODO", i })}
                    />
                ))}
            </div>
        </>

    )

};


export default TaskList;