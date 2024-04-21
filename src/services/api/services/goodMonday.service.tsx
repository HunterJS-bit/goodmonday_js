import HttpService from "../http/http.service";
import { RegistrationPayload } from '../../../interfaces/User';



const registerUser = async (payload: RegistrationPayload) => {
    try {
        const { data } = await HttpService.create(`users`, null, payload);
        return data;

    } catch (error) {
        return error;
    }
}


export { registerUser }