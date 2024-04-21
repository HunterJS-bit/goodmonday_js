import React from 'react';
import { useForm } from 'react-hook-form';
import { registerUser } from '../../services/api/services/goodMonday.service';
import Button from '../common/Buttons/Button';
import Input from '../common/inputs/Input';
import { RegistrationData } from '../../interfaces/User';
import { userNameValidation, emailvalidation, passwordValidation } from '../../utils/validations/registration';




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

    const onSubmit = async (data: RegistrationData) => {
        try {
            const res = await registerUser(data)
            console.log('Done', res)
        } catch (e) {
            console.log('err', e)
        }
        reset();
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
                        register={register("name", userNameValidation)}
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
                        register={register("email", emailvalidation)}
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
                        register={register("password", passwordValidation)}
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
                        register={register("repassword", passwordValidation)}
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