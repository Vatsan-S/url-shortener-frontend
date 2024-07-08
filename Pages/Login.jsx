import axios from "axios";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signInSuccess } from "../Redux/Slice/userSlice";
import LoginBanner from "../Components/LoginBanner";
const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // ===============================================handleSubmit on login ===========================================
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("username", username);
    console.log("Password", password);
    const payload = {
      username: username,
      password: password,
    };
    await axios
      .post("http://localhost:4000/api/user/login", payload)
      .then((res) => {
        localStorage.setItem("Token", res.data.token);
        console.log(res.data.result);
        dispatch(signInSuccess(res.data.result));
        navigate("/landingpage");
      })
      .catch((err) => {
        setMsg(err.response.data.message);
        console.log(err.response.data.message);
      });
  };
  return (
    <div className="loginpage">
      <LoginBanner />
      <div className="credentialhalf">
        <div className="credentialContent">
          <h4 className="loginheader">Bonjour!</h4>
          <p className="loginpara">Please login to your account</p>
          <p className="errMsg">{msg}</p>
          <form className="loginForm" onSubmit={handleSubmit}>
            <input
              type="text"
              name="username"
              required
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />

            <input
              type="password"
              name="password"
              id="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Link to="/forgotpassword">Forgot password?</Link>

            <button className="formSubmit" type="submit">
              Submit
            </button>
          </form>
          <Link className="signupLink" to="/register">
            New here? <span>Sign Up</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Login;
