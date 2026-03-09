import {
  initialLoginState,
  initialRegisterState,
  validateLogin,
  validateRegister
} from '../models/authModel';

export const updateField = (state, field, value) => ({
  ...state,
  [field]: value,
  errors: {
    ...state.errors,
    [field]: ''
  }
});

export const submitLogin = (state) => {
  const { isValid, errors } = validateLogin(state);
  return {
    isValid,
    nextState: {
      ...state,
      errors
    }
  };
};

export const submitRegister = (state) => {
  const { isValid, errors } = validateRegister(state);
  return {
    isValid,
    nextState: {
      ...state,
      errors
    }
  };
};

export const resetLoginState = () => ({
  ...initialLoginState,
  errors: {}
});

export const resetRegisterState = () => ({
  ...initialRegisterState,
  errors: {}
});
