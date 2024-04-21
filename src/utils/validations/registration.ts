
const userNameValidation = {
    required: "Email is a required field", minLength: {
        value: 6,
        message: "Field must be longer then 6 char"
    }
}

const emailvalidation = {
    required: "Email is a required field", minLength: {
        value: 6,
        message: "Field must be longer then 6 char"
    }
}

const passwordValidation = {
    required: "Password is a required field", minLength: {
        value: 6,
        message: "Field must be longer then 6 char"
    }
}

export { userNameValidation, emailvalidation, passwordValidation };