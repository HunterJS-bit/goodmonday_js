import React, { useState } from 'react';


const TaskItem = ({ text, index, isCompleted, onCheck, onRemove, onEdit }) => {

    const [isEdit, setIsEdit] = useState(false);

    const onChange = (e) => {
        onEdit(e);
    }

    const onBlur = () => {
        setIsEdit(false);
    }

    const onEditAction = () => {
        setIsEdit(!isEdit)
    }


    return (<div className="flex mb-4 items-center">
        {!isEdit && <p className={`w-full text-grey-darkest ${isCompleted && 'line-through'} `} onClick={onCheck}>{text}</p>}
        {isEdit && <input className="border border-gray-700 p-2 rounded-sm" value={text} onChange={onChange} onBlur={onBlur} />}
        <button className="flex-no-shrink p-2 ml-4 mr-2 border-2 rounded hover:text-white text-green border-green hover:bg-green" onClick={onEditAction} > {isEdit ? 'Save' : 'Edit'}</button>
        <button
            className="flex text-red-500 border-2 border-red-500 p-2 rounded-lg" onClick={onRemove}>
            <svg className="h-6 w-6 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" strokeLinecap="round" strokeLinejoin="round">  <circle cx="12" cy="12" r="10" />  <line x1="15" y1="9" x2="9" y2="15" />  <line x1="9" y1="9" x2="15" y2="15" /></svg>
            <span>Remove</span>
        </button>
    </div >)
};

export default TaskItem;