function LoginView({ values, errors, onChange, onSubmit, onSwitch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form className="auth-card" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="login-email">Email</label>
        <input
          id="login-email"
          type="email"
          value={values.email}
          onChange={(event) => onChange('email', event.target.value)}
          placeholder="name@email.com"
        />
        {errors.email ? <span className="error">{errors.email}</span> : null}
      </div>
      <div className="field">
        <label htmlFor="login-password">Mật khẩu</label>
        <input
          id="login-password"
          type="password"
          value={values.password}
          onChange={(event) => onChange('password', event.target.value)}
          placeholder="••••••••"
        />
        {errors.password ? (
          <span className="error">{errors.password}</span>
        ) : null}
      </div>
      <button className="primary-button" type="submit">
        Đăng nhập
      </button>
      <button className="secondary-button" type="button" onClick={onSwitch}>
        Chưa có tài khoản? Đăng ký
      </button>
    </form>
  );
}

export default LoginView;
