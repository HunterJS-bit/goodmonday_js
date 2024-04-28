import React from 'react';
import { ADD_TASK, UNDO, REDO, EDIT_TASK, DELETE_TASK } from '../../../reducers/taskActions';
import { State, Action } from '../../../reducers/taskReducer';
import { taskListCrudAction } from '../../../utils/tasks';
import { Task } from '../../../interfaces/Task';
import TaskItem from './item/TaskItem';
import Button from '../../common/Buttons/Button';
import AddIcon from '../../common/icons/addIcon';


type ReloadTasksFunction = () => void;
type DispatchAction = (action: string, payload?: any) => void;

type TaskListProps = {
  state: State;
  dispatch: DispatchAction;
  reloadTaskList: ReloadTasksFunction;
};

const TaskList: React.FC<TaskListProps> = ({ state, dispatch, reloadTaskList }) => {

  const { tasks, prevState, nextState, pendingChanges } = state;

  const onAddTask = () => {
    dispatch(ADD_TASK, { title: 'test' });
  };

  const onUndo = () => {
    dispatch(UNDO);
  };

  const onRedo = () => {
    dispatch(REDO);
  };

  const onEditTask = (id: string | undefined, index: number, done: boolean, title: string) => {
    dispatch(EDIT_TASK, { id, index, done, title })
  };

  const onDeleteTask = (index: number, id: string | undefined) => {
    dispatch(DELETE_TASK, { index, id });
  };

  const onConfirm = async () => {
    await taskListCrudAction(state.pendingChanges);
    await reloadTaskList();
  };

  return (
    <>
      <div className="mt-8 mb-3">
        <Button
          className={`border-2 border-red-500 text-red-500 ${!prevState && 'cursor-not-allowed opacity-50'
            }`}
          onClick={onUndo}
          disabled={!prevState}>
          {' '}
          ← Undo
        </Button>
        <Button
          className={`border-2 border-indigo-500 text-indigo-500 ml-4 ${!nextState && 'cursor-not-allowed opacity-50'
            }`}
          onClick={onRedo}
          disabled={!nextState}>
          {' '}
          Redo →
        </Button>
      </div>
      <Button
        className="border-2 border-green-500 text-green-500 hover:text-white hover:bg-green-500 rounded-lg flex"
        onClick={onAddTask}>
        <AddIcon />
        <span>Add</span>
      </Button>
      <div className="pt-5">
        {tasks.map((task: Task, i: number) => (
          <TaskItem
            key={i}
            text={task.title}
            isCompleted={task.done}
            onEdit={(done: boolean, text: string) => onEditTask(task?.id, i, done, text)}
            onCheck={() => onEditTask(task?.id, i, !task.done, task.title)}
            onRemove={() => onDeleteTask(i, task?.id)}
          />
        ))}
      </div>

      <div className="pt-5">
        <Button
          className={`border-2 border-gray-500 ${!pendingChanges?.length && 'cursor-not-allowed opacity-50'
            }`}
          onClick={onConfirm}>
          <span>Confirm Changes</span>
        </Button>
      </div>
    </>
  );
};

export default TaskList;
