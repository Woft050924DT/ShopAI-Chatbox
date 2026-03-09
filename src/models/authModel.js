export const initialLoginState = {
  email: '',
  password: '',
  errors: {}
};

export const initialRegisterState = {
  fullName: '',
  email: '',
  password: '',
  confirmPassword: '',
  errors: {}
};

const isBlank = (value) => !value || value.trim() === '';

export const validateLogin = (state) => {
  const errors = {};

  if (isBlank(state.email)) {
    errors.email = 'Vui lòng nhập email';
  }

  if (isBlank(state.password)) {
    errors.password = 'Vui lòng nhập mật khẩu';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};

export const validateRegister = (state) => {
  const errors = {};

  if (isBlank(state.fullName)) {
    errors.fullName = 'Vui lòng nhập họ và tên';
  }

  if (isBlank(state.email)) {
    errors.email = 'Vui lòng nhập email';
  }

  if (isBlank(state.password)) {
    errors.password = 'Vui lòng nhập mật khẩu';
  } else if (state.password.length < 6) {
    errors.password = 'Mật khẩu tối thiểu 6 ký tự';
  }

  if (isBlank(state.confirmPassword)) {
    errors.confirmPassword = 'Vui lòng nhập lại mật khẩu';
  } else if (state.confirmPassword !== state.password) {
    errors.confirmPassword = 'Mật khẩu không khớp';
  }

  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
};
