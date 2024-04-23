import { Task } from '../interfaces/Task';

interface PendingChange {
    type: string;
    task: Task;
}

interface State {
    prevState: State | null;
    nextState: State | null;
    tasks: Task[];
    pendingChanges: PendingChange[];
}

type Action =
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
            return {
                ...state,
                prevState: state,
                nextState: null,
                tasks: [
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
            const newTodos = [...before, ...after];
            return {
                ...state,
                prevState: state,
                nextState: null,
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
            const newTodos = [...before, newItem, ...after];
            return {
                ...state,
                prevState: state,
                nextState: null,
                tasks: newTodos,
                pendingChanges: [...state.pendingChanges, {
                    type: 'EDIT_TASK', task: {
                        title,
                        done
                    }
                }]
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