import React, { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import fire from "../fire";
export const authContext = createContext();
export const useAuth = () => useContext(authContext);

const AuthContextProvider = ({ children }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, setUser] = useState("");
  const [emailConfirm, setEmailConfirm] = useState("");
  const [passowrdConfirm, setPasswordConfirm] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState("");
  const navigate = useNavigate();

  const clearInputs = () => {
    setEmail("");
    setPassword("");
    setEmailConfirm("");
    setPasswordConfirm("");
  };

  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };

  // !  Register
  const handleRegister = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email, password, passowrdConfirm)
      .then(() => {
        setHasAccount(!hasAccount);
      })
      .catch((error) => {
        switch (error.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(error.message);
            break;
          case "auth/weak-password":
            setPasswordError(error.message);
          default:
            break;
        }
      });
    clearInputs();
  };

  //   ! LOGIN
  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => navigate("/"), console.log("login then worked"))
      .catch((error) => {
        switch (error.code) {
          case "auth/user-disabled":
          case "auth/invalid-email":
          case "auth/user-not-found":
            setEmailError(error.code);
            console.log(error.code);
            break;
          case "auth/wrong-password":
            setPasswordError(Object.values(error.code));
            console.log(Object.values(error.code));
            break;
          default:
            break;
        }
      });
    clearInputs();
  };

  //  ! LOGOUT
  const handleLogOut = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser("");
      }
    });
  };
  useEffect(() => {
    authListener();
  }, []);

  const values = {
    user,
    email,
    password,
    passowrdConfirm,
    emailError,
    passwordError,
    setEmail,
    setPassword,
    setUser,
    setEmailError,
    setPasswordError,
    setPasswordConfirm,
    handleRegister,
    handleLogOut,
    handleLogin,
    hasAccount,
    setHasAccount,
  };
  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

export default AuthContextProvider;
