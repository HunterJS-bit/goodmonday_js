export interface RegistrationData {
    name: string;
    email: string;
    password: string;
    repassword?: string;
}

export type RegistrationPayload = Omit<RegistrationData, "repassword">


export interface LoginData {
    email: string;
    password: string;
}