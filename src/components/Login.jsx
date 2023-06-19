import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleLogin } from "../store/auth/authAction";
import { setEmail, setPassword } from "../store/auth/authSlice";
import { Box, Button, Container, TextField, Typography } from "@mui/material";

const Login = () => {
  const { email, password, emailError, passwordError } = useSelector(
    (state) => state.auth
  );

  const [showError, setShowError] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleUser = () => {
    if (!email.trim() || !password.trim()) {
      setShowError(true);
      return;
    }
    const obj = {
      email,
      password,
      navigate,
    };
    dispatch(handleLogin(obj));
  };
  console.log(123);
  return (
    <div className="container">
      <div className="main">
        <input type="checkbox" id="chk" aria-hidden="true" />

        <div className="login">
          <div className="form">
            <label htmlFor="chk" aria-hidden="true">
              Log In
            </label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
            />
            {emailError && (
              <p
                style={{
                  width: "80%",
                  color: "red",
                  marginBottom: "10px",
                }}
              >
                {emailError}
              </p>
            )}
            <input
              className="input"
              type="password"
              name="pswd"
              placeholder="Password"
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
            />
            {passwordError && (
              <p
                style={{
                  width: "80%",
                  color: "red",
                  marginBottom: "10px",
                }}
              >
                {passwordError}
              </p>
            )}
            {showError ? (
              <p style={{ color: "red" }}>Заполните все поля</p>
            ) : (
              <></>
            )}
            <button onClick={handleUser}>Login</button>
            <Link
              to="/register"
              style={{ color: "black", textDecoration: "none" }}
              variant="body2"
              //   onClick={() => navigate("/register")}
            >
              {"Если у вас уже есть учетная запись? Войти"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
