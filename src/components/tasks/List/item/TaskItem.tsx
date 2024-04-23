import React, { useState } from 'react';
import Button from '../../../common/Buttons/Button';
import Input from '../../../common/inputs/Input';

type TaskItemProps = {
  text: string;
  isCompleted: boolean;
  onCheck: () => void;
  onRemove: () => void;
  onEdit: (isCompleted: boolean, newText: string) => void;
};

const TaskItem: React.FC<TaskItemProps> = ({ text, isCompleted, onCheck, onRemove, onEdit }) => {
  const [isEdit, setIsEdit] = useState(false);
  const [taskText, setText] = useState(text);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setText(e.target.value);
  };

  const onEditAction = () => {
    setIsEdit(!isEdit);
    onEdit(isCompleted, taskText);
  };

  const cancelEdit = () => {
    setIsEdit(!isEdit);
    setText(text);
  };

  return (
    <div className="flex mb-4 items-center">
      {!isEdit && (
        <p
          className={`w-full text-grey-darkest ${
            isCompleted && 'line-through'
          } hover:cursor-pointer`}
          onClick={onCheck}>
          {text}
        </p>
      )}
      {isEdit && (
        <input
          className="w-full border border-gray-700 p-2 rounded-sm"
          value={taskText}
          onChange={onChange}
        />
      )}
      <Button
        className="flex-no-shrink  ml-4 mr-2 border-2 rounded hover:text-white hover:bg-blue-500 text-blue-500 border-blue-500"
        onClick={onEditAction}>
        {' '}
        {isEdit ? 'Save' : 'Edit'}
      </Button>
      {isEdit && (
        <Button
          className="flex-no-shrink  ml-4 mr-2 border-2 rounded hover:text-white hover:bg-yellow-500 text-yellow-500 border-yellow-500"
          onClick={cancelEdit}>
          {' '}
          Cancel{' '}
        </Button>
      )}
      {!isEdit && (
        <Button
          className="flex text-red-500 border-2 border-red-500 rounded-lg hover:bg-red-500 hover:text-white "
          onClick={onRemove}>
          <svg
            className="h-6 w-6 hover:text-white"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round">
            {' '}
            <circle cx="12" cy="12" r="10" /> <line x1="15" y1="9" x2="9" y2="15" />{' '}
            <line x1="9" y1="9" x2="15" y2="15" />
          </svg>
          <span>Remove</span>
        </Button>
      )}
    </div>
  );
};

export default TaskItem;
