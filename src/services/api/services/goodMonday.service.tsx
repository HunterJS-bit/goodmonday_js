import HttpService from "../http/http.service";
import { RegistrationPayload, LoginData as LoginPayload } from '../../../interfaces/User';



const registerUser = async (payload: RegistrationPayload) => {
    try {
        const { data } = await HttpService.create(`users`, null, payload);
        return data;

    } catch (error) {
        return error;
    }
}


const logInUser = async (payload: LoginPayload) => {
    try {
        const { data } = await HttpService.create(`/users/login`, null, payload);
        return data;

    } catch (error) {
        return error;
    }
}


export { registerUser, logInUser }