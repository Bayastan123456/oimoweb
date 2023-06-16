import React, { useState } from "react";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogin, handleSingUp } from "../store/auth/authAction";
import { setEmail, setPassword } from "../store/auth/authSlice";

function App() {
  const { email, password, emailError, passwordError } = useSelector(
    (state) => state.auth
  );
  const [showError, setShowError] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

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

  const { emailLog, passwordLog } = useSelector((state) => state.auth);
  const handleUserLogin = () => {
    if (!emailLog.trim() || !passwordLog.trim()) {
      setShowError(true);
      return;
    }
    const obj = {
      emailLog,
      passwordLog,
      navigate,
    };
    dispatch(handleLogin(obj));
  };

  return (
    <div className="container">
      <div className="main">
        <input
          type="checkbox"
          id="chk"
          aria-hidden="true"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />

        <div className={`login ${isChecked ? "checked" : ""}`}>
          <form className="form">
            <label htmlFor="chk" aria-hidden="true">
              Log in
            </label>
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              required
            />
            <input
              className="input"
              type="password"
              name="pswd"
              placeholder="Password"
              required
            />
            <button onClick={() => handleUserLogin}>Log in</button>
          </form>
        </div>

        <div className={`register ${isChecked ? "checked" : ""}`}>
          <form className="form">
            <label htmlFor="chk" aria-hidden="true">
              Register
            </label>
            <input
              className="input"
              type="text"
              name="txt"
              placeholder="Username"
              required
            />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => dispatch(setEmail(e.target.value))}
            />
            <input
              className="input"
              type="password"
              name="pswd"
              placeholder="Password"
              required
              value={password}
              onChange={(e) => dispatch(setPassword(e.target.value))}
            />
            <button onClick={handleUser}>Register</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
