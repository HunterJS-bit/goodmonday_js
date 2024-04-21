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
            return {
                ...state,
                prevState: state,
                nextState: null,
                tasks: [
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
            const newTodos = [...before, ...after];
            return {
                ...state,
                prevState: state,
                nextState: null,
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
            const newTodos = [...before, newItem, ...after];
            return {
                ...state,
                prevState: state,
                nextState: null,
                tasks: newTodos
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