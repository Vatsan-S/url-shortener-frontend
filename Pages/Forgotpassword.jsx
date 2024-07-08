import axios from "axios";

import React, { useState } from "react";
import { FaCircleCheck } from "react-icons/fa6";
import LoginBanner from "../Components/LoginBanner";

const Forgotpassword = () => {
  const [username, setUsername] = useState("");
  const [state, setState] = useState(true);
  const [msg, setMsg] = useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      username: username,
    };
    await axios
      .post("http://localhost:4000/api/user/forgot_password", payload)
      .then((res) => setState(false))
      .catch((err) => {
        setMsg(err.response.data.message);
        console.log(err);
      });
  };
  return (
    <div className="forgotPage">
      {state ? (
        <>
          <LoginBanner />

          <div className="credentialhalf">
            <div className="credentialContent">
              <h1>Forgot password?</h1>
              <p>
                We will send you an email with instructions on how to reset your
                password.
              </p>
              <p className="errMsg">{msg}</p>
              <form className="loginForm" onSubmit={handleSubmit}>
                <input
                  type="text"
                  value={username}
                  placeholder="Username"
                  onChange={(e) => setUsername(e.target.value)}
                />
                <button className="formSubmit" type="submit">
                  Email Me
                </button>
              </form>
            </div>
          </div>
        </>
      ) : (
        <div className="container">
          <div className="tick-icon">
            <FaCircleCheck className="tickIcon" />
          </div>
          <h1>Email sent</h1>
          <p>
            We have sent you a reset password link to your email linked to your
            username
          </p>
        </div>
      )}
    </div>
  );
};

export default Forgotpassword;
