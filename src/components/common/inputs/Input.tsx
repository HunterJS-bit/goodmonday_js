import React from 'react';


const Input = ({ value, onChange, register, ...props }) => {

    // const mytest = register("mytest", { required: "mytest is a required field" });

    return (
        <input

            className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
            {...props}
            {...register}
        />
    )
};


export default Input;