const initialState = {
    prevState: null,
    nextState: null,
    tasks: [],
    pendingChanges: []
};

const taskReducer = (state, action) => {
    switch (action.type) {
        case "ADD_TODO": {
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
                    type: 'ADD_TODO', task: {
                        title: action.title,
                        done: false
                    }
                }]
            };
        }
        case "DELETE_TODO": {
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
                    type: 'DELETE_TODO', task: {
                        id: index
                    }
                }]
            };
        }
        case "EDIT_TODO": {
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
                    type: 'EDIT_TODO', task: {
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