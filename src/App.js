import { useState } from 'react';
import './App.css';
import LoginView from './views/Login';
import RegisterView from './views/Register';
import { initialLoginState, initialRegisterState } from './models/authModel';
import {
  resetLoginState,
  resetRegisterState,
  submitLogin,
  submitRegister,
  updateField
} from './controllers/authController';

function App() {
  const [mode, setMode] = useState('login');
  const [loginState, setLoginState] = useState(initialLoginState);
  const [registerState, setRegisterState] = useState(initialRegisterState);
  const [message, setMessage] = useState('');

  const handleLoginChange = (field, value) => {
    setLoginState((prev) => updateField(prev, field, value));
  };

  const handleRegisterChange = (field, value) => {
    setRegisterState((prev) => updateField(prev, field, value));
  };

  const handleLoginSubmit = () => {
    const { isValid, nextState } = submitLogin(loginState);
    if (isValid) {
      const email = loginState.email;
      setLoginState(resetLoginState());
      setMessage(`Đăng nhập thành công: ${email}`);
    } else {
      setLoginState(nextState);
      setMessage('');
    }
  };

  const handleRegisterSubmit = () => {
    const { isValid, nextState } = submitRegister(registerState);
    if (isValid) {
      const email = registerState.email;
      setRegisterState(resetRegisterState());
      setMessage(`Đăng ký thành công: ${email}`);
    } else {
      setRegisterState(nextState);
      setMessage('');
    }
  };

  const handleSwitchToLogin = () => {
    setMode('login');
    setMessage('');
  };

  const handleSwitchToRegister = () => {
    setMode('register');
    setMessage('');
  };

  return (
    <div className="app">
      <div className="auth-shell">
        <div className="auth-header">
          <h1>Shop AI</h1>
          <p>Đăng nhập hoặc tạo tài khoản mới</p>
        </div>
        <div className="auth-tabs">
          <button
            className={mode === 'login' ? 'tab active' : 'tab'}
            onClick={handleSwitchToLogin}
            type="button"
          >
            Đăng nhập
          </button>
          <button
            className={mode === 'register' ? 'tab active' : 'tab'}
            onClick={handleSwitchToRegister}
            type="button"
          >
            Đăng ký
          </button>
        </div>
        {mode === 'login' ? (
          <LoginView
            values={loginState}
            errors={loginState.errors}
            onChange={handleLoginChange}
            onSubmit={handleLoginSubmit}
            onSwitch={handleSwitchToRegister}
          />
        ) : (
          <RegisterView
            values={registerState}
            errors={registerState.errors}
            onChange={handleRegisterChange}
            onSubmit={handleRegisterSubmit}
            onSwitch={handleSwitchToLogin}
          />
        )}
        {message ? <div className="auth-message">{message}</div> : null}
      </div>
    </div>
  );
}

export default App;
