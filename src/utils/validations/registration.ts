const userNameValidation = {
  required: 'Name is a required field',
  minLength: {
    value: 3,
    message: 'Field must be longer then 3 char'
  }
};

const emailvalidation = {
  required: 'Email is a required field',
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: 'invalid email address'
  }
};

const passwordValidation = {
  required: 'Password is a required field',
  minLength: {
    value: 6,
    message: 'Field must be longer then 6 char'
  }
};

export { userNameValidation, emailvalidation, passwordValidation };
