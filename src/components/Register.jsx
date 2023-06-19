import React, { useState } from "react";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { handleSingUp } from "../store/auth/authAction";
import { setEmail, setPassword } from "../store/auth/authSlice";

function App() {
  const { email, password, emailError, passwordError } = useSelector(
    (state) => state.auth
  );
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleUser = () => {
    if (!email.trim() || !password.trim()) {
      setShowError(true);
      return;
    }
    let obj = {
      email,
      password,
      navigate,
    };
    dispatch(handleSingUp(obj));
  };

  return (
    <div className="container">
      <div className="main">
        <div className="login">
          <div className="form">
            <label htmlFor="chk" aria-hidden="true">
              Register
            </label>
            <input
              className="input"
              type="text"
              name="txt"
              placeholder="Username"
            />
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
            <button onClick={handleUser}>Register</button>
            <Link
              style={{ color: "black", textDecoration: "none" }}
              to="/login"
              variant="body2"
            >
              {"У вас уже есть учетная запись? Войти"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
