import React from 'react';
import { useForm } from 'react-hook-form';
import { logInUser } from '../../services/api/services/goodMonday.service';
import { emailvalidation, passwordValidation } from '../../utils/validations/registration';
import Button from '../common/Buttons/Button';
import Input from '../common/inputs/Input';
import { LoginData } from '../../interfaces/User';
import { useAuth } from '../../context/AuthContext';

function LoginForm() {
  const { logIn } = useAuth() || {};

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      email: '',
      password: ''
    }
  });

  const onSubmit = async (data: LoginData) => {
    try {
      const res = await logInUser(data);
      logIn && logIn(res?.token);
    } catch (e) {
      console.log('err', e);
    }
    reset();
  };

  return (
    <form className="w-full max-w-sm" onSubmit={handleSubmit(onSubmit)}>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            htmlFor="email"
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Email
          </label>
        </div>
        <div className="md:w-2/3">
          <Input name="email" register={register('email', emailvalidation)} type="email" />
          {errors?.email && <p>{errors.email.message}</p>}
        </div>
      </div>
      <div className="md:flex md:items-center mb-6">
        <div className="md:w-1/3">
          <label
            htmlFor="password"
            className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
            Password
          </label>
        </div>
        <div className="md:w-2/3">
          <Input
            name="password"
            register={register('password', passwordValidation)}
            type="password"
          />
          {errors?.password && <p>{errors.password.message}</p>}
        </div>
      </div>
      <div className="md:flex md:justify-end">
        <div className="md:w-2/3">
          <Button className="bg-indigo-600 text-white w-full" type="submit">
            Login
          </Button>
        </div>
      </div>
    </form>
  );
}

export default LoginForm;
