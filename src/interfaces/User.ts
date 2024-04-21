export interface RegistrationData {
    name: string;
    email: string;
    password: string;
    repassword?: string;
}

export type RegistrationPayload = Omit<RegistrationData, "repassword">