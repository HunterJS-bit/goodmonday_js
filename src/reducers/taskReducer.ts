import { Task } from '../interfaces/Task';

export interface State {
  prevState: State | null;
  nextState: State | null;
  tasks: Task[];
  pendingChanges: any[]; // track changes to how we need to send request
}

export type Action =
  | { type: 'ADD_TASK'; title: string }
  | { type: 'DELETE_TASK'; index: number, id?: string }
  | { type: 'EDIT_TASK'; id?: string, index: number; title: string; done: boolean }
  | { type: 'UNDO' }
  | { type: 'REDO' }
  | { type: 'RESET_PENDING_CHANGES' }


const initialState: State = {
  prevState: null,
  nextState: null,
  tasks: [],
  pendingChanges: []
};

// todo add tests for reducer logic a bit unclear
const taskReducer = (state: State, action: Action) => {
  switch (action.type)
  {
    case 'ADD_TASK': {
      const newEmptyTask = {
        title: action.title,
        done: false
      }
      return {
        ...state,
        prevState: state,
        nextState: null,
        tasks: [
          ...state.tasks,
          newEmptyTask
        ],
        pendingChanges: [
          ...state.pendingChanges,
          {
            type: 'ADD',
            index: state.tasks.length,
            task: newEmptyTask
          }
        ]
      };
    }
    case 'EDIT_TASK': {
      const { id, index, title, done } = action;
      const newItem = { ...state.tasks[index], title, done };
      const newTodos = [
        ...state.tasks.slice(0, index),
        newItem,
        ...state.tasks.slice(index + 1)
      ];

      let pendingChanges = state.pendingChanges.filter(task => task.index !== index);

      pendingChanges.push({
        type: 'EDIT',
        ...(id ? { id } : { index }),
        task: { title, done }
      });

      return {
        ...state,
        prevState: state,
        nextState: null,
        tasks: newTodos,
        pendingChanges: pendingChanges
      };
    }
    case 'DELETE_TASK': {
      const { id, index } = action;
      const newTodos = [
        ...state.tasks.slice(0, index),
        ...state.tasks.slice(index + 1)
      ];

      const pendingChanges = id
        ? [...state.pendingChanges, { type: 'DELETE', id }]
        : state.pendingChanges.filter(item => item.index !== index);

      return {
        ...state,
        prevState: state,
        nextState: null,
        tasks: newTodos,
        pendingChanges: [...pendingChanges]
      };
    }
    case 'UNDO': {
      if (!state.prevState) throw new Error('No prevState to undo to.');
      return {
        ...state.prevState,
        nextState: state
      };
    }
    case 'REDO': {
      if (!state.nextState) throw new Error('No nextState to redo to.');
      return state.nextState;
    }
    case 'RESET_PENDING_CHANGES': {
      return {
        ...state,
        pendingChanges: []
      };
    }
    default:
  }
  return state;
};

export { initialState, taskReducer };
