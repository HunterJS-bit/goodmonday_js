<<<<<<< HEAD
import { Task } from '../interfaces/Task';

interface PendingChange {
    type: string;
    task: Task;
}

export interface State {
    prevState: State | null;
    nextState: State | null;
    tasks: Task[];
    pendingChanges: PendingChange[];
}

export type Action =
    | { type: "ADD_TASK"; title: string }
    | { type: "DELETE_TASK"; index: number }
    | { type: "EDIT_TASK"; index: number; title: string; done: boolean }
    | { type: "UNDO" }
    | { type: "REDO" };




const initialState: State = {
    prevState: null,
    nextState: null,
    tasks: [],
    pendingChanges: []
};

const taskReducer = (state: State, action: Action) => {
    switch (action.type)
    {
        case "ADD_TASK": {
=======
const initialState = {
    prevState: null,
    nextState: null,
    tasks: []
};

const taskReducer = (state, action) => {
    switch (action.type) {
        case "RESET": {
            return initialState;
        }
        case "ADD_TODO": {
>>>>>>> 175d273... feat(tasks): add base crud oprations for task list
            return {
                ...state,
                prevState: state,
                nextState: null,
                tasks: [
<<<<<<< HEAD
                    ...state.tasks,
                    {
                        title: action.title,
                        done: false
                    },
                ],
                pendingChanges: [...state.pendingChanges, {
                    type: 'ADD_TASK', task: {
                        title: action.title,
                        done: false
                    }
                }]
            };
        }
        case "DELETE_TASK": {
            const { index } = action;
            const before = state.tasks.slice(0, index);
            const after = state.tasks.slice(index + 1);
=======
                    {
                        text: action.text,
                        isDone: false
                    },
                    ...state.tasks
                ]
            };
        }
        case "DELETE_TODO": {
            const { i } = action;
            const before = state.tasks.slice(0, i);
            const after = state.tasks.slice(i + 1);
>>>>>>> 175d273... feat(tasks): add base crud oprations for task list
            const newTodos = [...before, ...after];
            return {
                ...state,
                prevState: state,
                nextState: null,
<<<<<<< HEAD
                tasks: newTodos,
                pendingChanges: [...state.pendingChanges, {
                    type: 'DELETE_TASK', task: {
                        id: index
                    }
                }]
            };
        }
        case "EDIT_TASK": {
            const { index, title, done } = action;
            const before = state.tasks.slice(0, index);
            const after = state.tasks.slice(index + 1);
            const newItem = { ...state.tasks[index], title };
=======
                tasks: newTodos
            };
        }
        case "SET_CHECK": {
            const { i, isDone } = action;
            const before = state.tasks.slice(0, i);
            const after = state.tasks.slice(i + 1);
            const newItem = { ...state.tasks[i], isDone };
            const newTodos = [...before, newItem, ...after];
            return {
                ...state,
                prevState: state,
                nextState: null,
                tasks: newTodos
            };
        }
        case "EDIT_TODO": {
            const { i, text } = action;
            const before = state.tasks.slice(0, i);
            const after = state.tasks.slice(i + 1);
            const newItem = { ...state.tasks[i], text };
>>>>>>> 175d273... feat(tasks): add base crud oprations for task list
            const newTodos = [...before, newItem, ...after];
            return {
                ...state,
                prevState: state,
                nextState: null,
<<<<<<< HEAD
                tasks: newTodos,
                pendingChanges: [...state.pendingChanges, {
                    type: 'EDIT_TASK', task: {
                        title,
                        done
                    }
                }]
=======
                tasks: newTodos
>>>>>>> 175d273... feat(tasks): add base crud oprations for task list
            };
        }
        case "UNDO": {
            if (!state.prevState) throw new Error("No prevState to undo to.");
            return {
                ...state.prevState,
                nextState: state
            };
        }
        case "REDO": {
            if (!state.nextState) throw new Error("No nextState to redo to.");
            return state.nextState;
        }
        default:
    }
    return state;
}

export { initialState, taskReducer }