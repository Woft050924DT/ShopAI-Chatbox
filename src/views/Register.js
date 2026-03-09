function RegisterView({ values, errors, onChange, onSubmit, onSwitch }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit();
  };

  return (
    <form className="auth-card" onSubmit={handleSubmit}>
      <div className="field">
        <label htmlFor="register-name">Họ và tên</label>
        <input
          id="register-name"
          type="text"
          value={values.fullName}
          onChange={(event) => onChange('fullName', event.target.value)}
          placeholder="Nguyễn Văn A"
        />
        {errors.fullName ? (
          <span className="error">{errors.fullName}</span>
        ) : null}
      </div>
      <div className="field">
        <label htmlFor="register-email">Email</label>
        <input
          id="register-email"
          type="email"
          value={values.email}
          onChange={(event) => onChange('email', event.target.value)}
          placeholder="name@email.com"
        />
        {errors.email ? <span className="error">{errors.email}</span> : null}
      </div>
      <div className="field">
        <label htmlFor="register-password">Mật khẩu</label>
        <input
          id="register-password"
          type="password"
          value={values.password}
          onChange={(event) => onChange('password', event.target.value)}
          placeholder="••••••••"
        />
        {errors.password ? (
          <span className="error">{errors.password}</span>
        ) : null}
      </div>
      <div className="field">
        <label htmlFor="register-confirm">Nhập lại mật khẩu</label>
        <input
          id="register-confirm"
          type="password"
          value={values.confirmPassword}
          onChange={(event) => onChange('confirmPassword', event.target.value)}
          placeholder="••••••••"
        />
        {errors.confirmPassword ? (
          <span className="error">{errors.confirmPassword}</span>
        ) : null}
      </div>
      <button className="primary-button" type="submit">
        Đăng ký
      </button>
      <button className="secondary-button" type="button" onClick={onSwitch}>
        Đã có tài khoản? Đăng nhập
      </button>
    </form>
  );
}

export default RegisterView;
