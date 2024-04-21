import React from 'react';
import Input from '../inputs/Input';



const FormGroup = ({ Input }) => {


    return (
        <div className="md:flex md:items-center mb-6">
            <div className="md:w-1/3">
                <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    Name
                </label>
            </div>
            <div className="md:w-2/3">
                <Input />
            </div>
        </div>
    )
}