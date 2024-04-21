import React, { SyntheticEvent, useState } from 'react';
import Input from '../common/inputs/Input';



const RegistrationFrom = () => {

    const [useInfo, setUserInfo] = useState({
        name: '',
        email: '',
        password: '',
        rePassword: ''
    });


    const onChange = (type: string, e: SyntheticEvent) => {
        const data = e?.target?.value;
        console.log('dadad', e, data)
    }

    return (
        <form className="w-full max-w-sm">
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Name
                    </label>
                </div>
                <div className="md:w-2/3">
                    <Input value={useInfo?.name} onChange={(e: Event) => onChange('name', e)} />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Email
                    </label>
                </div>
                <div className="md:w-2/3">
                    <Input value={useInfo?.email} onChange={(e: Event) => onChange('email', e)} />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Password
                    </label>
                </div>
                <div className="md:w-2/3">
                    <Input value={useInfo?.password} onChange={(e: Event) => onChange('password', e)} />
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Re-type Password
                    </label>
                </div>
                <div className="md:w-2/3">
                    <Input value={useInfo?.rePassword} onChange={(e: Event) => onChange('rePassword', e)} />
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-1/3"></div>
                <div className="md:w-2/3">
                    <button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button">
                        Register
                    </button>
                </div>
            </div>
        </form>
    )


};


export default RegistrationFrom;