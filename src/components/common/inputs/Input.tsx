import React, { ChangeEventHandler } from 'react';
import { UseFormRegisterReturn } from 'react-hook-form';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  value?: string;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  register?: UseFormRegisterReturn<string>;
}

const Input: React.FC<InputProps> = ({ value, onChange, register, ...props }) => {
  return (
    <input
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none p-2 rounded-sm"
      {...props}
      {...register}
    />
  );
};

export default Input;
