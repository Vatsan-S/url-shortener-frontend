import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import LoginBanner from "../Components/LoginBanner";

const Register = () => {
  const [username, setUsername] = useState("");
  const [useremail, setUseremail] = useState("");
  const [userpassword, setUserpassword] = useState("");
  const [userfirstname, setUserfirstname] = useState("");
  const [userlastname, setUserlastname] = useState("");
  const [msg, setMsg] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      username: username,
      email: useremail,
      password: userpassword,
      firstname: userfirstname,
      lastname: userlastname,
    };
    await axios
      .post("http://localhost:4000/api/user/register", payload)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        if(err.response.data.message){
          setMsg(err.response.data.message);
        }
      }); //handle error perfectly
  };
  return (
    <div className="registerPage">
      <LoginBanner />
      <div className="credentialhalf">
        <div className="credentialContent">
          <h1>Create an Account </h1>
          <p>
            We will send you an email with instructions on how to{" "}
            <span>Activate</span> your Account.
          </p>
          <p className="errMsg">{msg}</p>

          <form className="loginForm" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
            <input
              type="email"
              placeholder="email"
              value={useremail}
              onChange={(e) => setUseremail(e.target.value)}
            />
            <input
              type="password"
              placeholder="password"
              value={userpassword}
              onChange={(e) => setUserpassword(e.target.value)}
            />
            <input
              type="firstname"
              placeholder="firstname"
              value={userfirstname}
              onChange={(e) => setUserfirstname(e.target.value)}
            />
            <input
              type="lastname"
              placeholder="lastname"
              value={userlastname}
              onChange={(e) => setUserlastname(e.target.value)}
            />
            <button className="formSubmit" type="submit">
              Submit
            </button>
          </form>
          <Link className="signupLink" to="/login">
            Having an account? <span>Sign In</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Register;
