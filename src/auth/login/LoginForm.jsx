import React from "react";
import { useAuth } from "../../context/AuthContext";
import styles from "../login/Login.module.css";
import { NavLink } from "react-router-dom";

const LoginForm = () => {
  const {
    user,
    email,
    password,
    emailError,
    passwordError,
    setEmail,
    setEmailError,
    setUser,
    setPassword,
    setPasswordError,
    handleRegister,
    handleLogOut,
    handleLogin,
    hasAccount,
    setHasAccount,
  } = useAuth();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(event);
    handleLogin();
  };
  console.log(emailError, passwordError);

  return (
    <div className={styles.main_login}>
      <form className={styles.form_login} action="">
        <p className={styles.form__header}>Please log in</p>
        <input
          sx={{ fontSize: "15px", fontWeight: "regular", letterSpacing: 1 }}
          className={styles.form__input}
          type="text"
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          sx={{ fontSize: "15px", fontWeight: "regular", letterSpacing: 1 }}
          className={styles.form__input}
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
          // endAdornment={
          //   <InputAdornment position="start">
          //     <IconButton
          //       className={styles.adornment}
          //       aria-label="toggle password visibility"
          //       onClick={handleClickShowPassword}
          //       onMouseDown={handleMouseDownPassword}
          //       edge="start"
          //     >
          //       {showPassword ? <VisibilityOff /> : <Visibility />}
          //     </IconButton>
          //   </InputAdornment>
          // }
        />
        <button
          type="submit"
          onClick={handleSubmit}
          className={styles.form__button}
        >
          Login
        </button>
      </form>
      <NavLink to="/register" className={styles.form__bottom_link}>
        <p className={styles.form__bottom_text}>I dont' have an account yet</p>
      </NavLink>
    </div>
  );
};

export default LoginForm;
