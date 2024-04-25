import { describe, it } from 'vitest';
import { initialState, taskReducer } from '../reducers/taskReducer';

// todo add more complex test cases
describe('taskReducer', () => {

    it('should add a task', () => {
        const action = { type: 'ADD_TASK', title: 'New Task' };
        const newState = taskReducer(initialState, action as any);
        expect(newState.tasks.length).toBe(1);
        expect(newState.tasks[0].title).toBe('New Task');
    });


    it('should edit a task', () => {
        const prevState = { ...initialState, tasks: [{ title: 'Task 1', done: false }] };
        const action = { type: 'EDIT_TASK', index: 0, title: 'Edited Task', done: true } as any;
        const newState = taskReducer(prevState, action);
        expect(newState.tasks[0].title).toBe('Edited Task');
        expect(newState.tasks[0].done).toBe(true);
    });


    it('should delete a task', () => {
        const prevState = { ...initialState, tasks: [{ title: 'Task 1', done: false }] };
        const action = { type: 'DELETE_TASK', index: 0 };
        const newState = taskReducer(prevState, action as any);
        expect(newState.tasks.length).toBe(0);
    });

    it('should delete a task', () => {
        const prevState = { ...initialState, tasks: [{ title: 'Task 1', done: false }, { title: 'Task 2', done: true }] };
        const action = { type: 'DELETE_TASK', index: 1 };
        const newState = taskReducer(prevState, action as any);
        expect(newState.tasks.length).toBe(1);
    });

    it('should reset pending changes', () => {
        const prevState = { ...initialState, pendingChanges: [{ type: 'ADD', task: { title: 'Task 1', done: false } }] };
        const action = { type: 'RESET_PENDING_CHANGES' };
        const newState = taskReducer(prevState, action as any);
        expect(newState.pendingChanges.length).toBe(0);
    });
})