import HttpService from "../http/http.service";
import { toast } from 'react-toastify';
import { RegistrationPayload, LoginData as LoginPayload } from '../../../interfaces/User';

import { TaskCreatePayload, TaskUpdatePayload } from '../../../interfaces/Task';

interface ErrorResponseItem {
    message: string;
}

const handleAxiosError = (error: any) => {
    if (error.response?.data?.errors)
    {
        const errors: ErrorResponseItem[] = error.response.data.errors;
        errors.forEach((errorItem: ErrorResponseItem) => {
            toast.error(errorItem.message);
        });
    } else
    {
        console.error('An error occurred:', error);
    }
}

const registerUser = async (payload: RegistrationPayload) => {
    try
    {
        const res = await HttpService.create(`users`, null, payload);
        return res;

    } catch (error: any)
    {
        handleAxiosError(error);
        return error;
    }
}


const logInUser = async (payload: LoginPayload) => {
    try
    {
        const { data } = await HttpService.create(`/users/login`, null, payload);
        return data;

    } catch (error: any)
    {
        handleAxiosError(error);
        return error;
    }
}


const getTasks = async () => {
    try
    {
        const { data } = await HttpService.get(`/to-do-items`, null);
        return data;

    } catch (error)
    {
        handleAxiosError(error);
        return error;
    }
}

const addTask = async (payload: TaskCreatePayload) => {
    try
    {
        const { data } = await HttpService.create(`/to-do-items`, null, payload);
        return data;

    } catch (error)
    {
        return error;
    }
}

const updateTask = async (id: string, payload: TaskUpdatePayload) => {
    try
    {
        const { data } = await HttpService.update(`/to-do-items/${id}`, null, payload);
        return data;

    } catch (error)
    {
        handleAxiosError(error);
        return error;
    }
}

const removeTask = async (id: string) => {
    try
    {
        const { data } = await HttpService.remove(`/to-do-items/${id}`, null, null);
        return data;

    } catch (error)
    {
        handleAxiosError(error);
        return error;
    }
}

export { registerUser, logInUser, getTasks, addTask, updateTask, removeTask }

