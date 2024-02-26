import React from "react";
import styles from "../registration/Reg.module.css";
import { Formik, Field, ErrorMessage, Form } from "formik";
import * as yup from "yup";
import { IconButton } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { useAuth } from "../../context/AuthContext";

const Registration = () => {
  const {
    email,
    password,
    passowrdConfirm,
    setEmail,
    setPassword,
    setPasswordConfirm,
    handleRegister,
  } = useAuth();

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email("Enter a valid email")
      .required("Email is required"),
    password: yup
      .string()
      .min(8, "Password should be of minimum 8 characters length")
      .required("Password is required"),
    password_confirm: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords must match")
      .required("Password confirmation is required")
      .test("passwords-match", "Passwords must match", function (value) {
        return this.parent.password === value;
      }),
  });

  return (
    <div className={styles.main}>
      <div className={styles.form}>
        <div className={styles.form__main_title}>
          <p className={styles.form__header}>Create your own account</p>
        </div>
        <Formik
          initialValues={{ email: "", password: "", password_confirm: "" }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            handleRegister(values);
          }}
        >
          {({ isSubmitting }) => (
            <Form className={styles.form__registration} action="">
              <Field
                type="email"
                name="email"
                placeholder="Enter your email"
                className={styles.form__input}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <ErrorMessage
                name="email"
                component="div"
                className={styles.error_reg}
              />

              <div className={styles.inputContainer}>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password"
                  placeholder="Enter password"
                  className={styles.form__input}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <IconButton
                  className={styles.adornment}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </div>
              <ErrorMessage
                name="password"
                component="div"
                className={styles.error_reg}
              />

              <div className={styles.inputContainer}>
                <Field
                  type={showPassword ? "text" : "password"}
                  name="password_confirm"
                  placeholder="Confirm your password"
                  value={passowrdConfirm}
                  className={styles.form__input}
                  onChange={(e) => setPasswordConfirm(e.target.value)}
                />
                <IconButton
                  className={styles.adornment}
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </div>
              <ErrorMessage
                name="password_confirm"
                component="div"
                className={styles.error_reg}
              />

              <button
                style={{
                  backgroundColor: "#a88c81",
                }}
                className={styles.form__button}
                type="submit"
                onClick={handleRegister}
              >
                Continue
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Registration;
