import React from 'react';
import { useForm } from 'react-hook-form';
import Button from '../common/Buttons/Button';
import Input from '../common/inputs/Input';

interface RegistrationData {
    name: string;
    email: string;
    password: string;
    repassword: string;
}


const RegistrationFrom = () => {

    const {
        register,
        handleSubmit,
        reset,
        watch,
        formState: { errors },
    } = useForm(
        {
            defaultValues: {
                name: "test1user",
                email: "test1user@gmail.com",
                password: "123456",
                repassword: "123456"
            },
        }
    );

    const password = watch('password', '123456');

    const onSubmit = (data: RegistrationData) => {
        console.log('Done', data)
        // console.log(data);
        // reset();
    }

    return (
        <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label htmlFor={'name'} className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Name
                    </label>
                </div>
                <div className="md:w-2/3">
                    <Input
                        name={'name'}
                        register={register("name", {
                            required: "Name is a required field", minLength: {
                                value: 3,
                                message: "Field must be longer then 3 char"
                            }
                        })}
                        type="text" />
                    {errors?.name && <p>{errors.name.message}</p>}
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label htmlFor={'email'} className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Email
                    </label>
                </div>
                <div className="md:w-2/3">
                    <Input
                        name={'email'}
                        register={register("email", {
                            required: "Email is a required field", minLength: {
                                value: 6,
                                message: "Field must be longer then 6 char"
                            }
                        })}
                        type="email" />
                    {errors?.email && <p>{errors.email.message}</p>}
                </div>
            </div>

            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label htmlFor={'password'} className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Password
                    </label>
                </div>
                <div className="md:w-2/3">
                    <Input
                        name={'password'}
                        register={register("password", {
                            required: "Password is a required field", minLength: {
                                value: 6,
                                message: "Field must be longer then 6 char"
                            }
                        })}
                        type="password" />
                    {errors?.password && <p>{errors.password.message}</p>}
                </div>
            </div>
            <div className="md:flex md:items-center mb-6">
                <div className="md:w-1/3">
                    <label htmlFor={'repassword'} className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                        Password
                    </label>
                </div>
                <div className="md:w-2/3">
                    <Input
                        name={'repassword'}
                        register={register("repassword", {
                            required: "Password is a required field", minLength: {
                                value: 6,
                                message: "Field must be longer then 6 char"
                            },
                            validate: value => value === password || 'The passwords do not match'
                        })}
                        type="password" />
                    {errors?.repassword && <p>{errors.repassword.message}</p>}
                </div>
            </div>
            <div className="md:flex md:items-center">
                <div className="md:w-2/3">
                    <Button type="submit">
                        Register
                    </Button>
                </div>
            </div>
        </form>
    )


};


export default RegistrationFrom;