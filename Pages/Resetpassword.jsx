import axios from "axios";
import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import LoginBanner from "../Components/LoginBanner";
const Resetpassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [msg, setMsg]= useState('')
  const { username, id } = useParams();
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (newPassword != confirmPassword) {
      return setMsg("Password does not match");
    }
    const payload = {
      newPassword: newPassword,
      username: username,
      id: id,
    };
    await axios
      .post("https://url-shortner-backend-cqtj.onrender.com/api/user/reset_password", payload)
      .then((res) => {
        navigate("/login");
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="forgotPage">
      <LoginBanner/>
      <div className="credentialhalf">
        <div className="credentialContent">
        <h1>Reset password</h1>
              <p>
                Provide a password that is minimum 6 characters
              </p>
              <p className="errMsg">{msg}</p>
        <form className="loginForm" onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />
        <button className="formSubmit" type="submit">Submit</button>
      </form>
        </div>
      </div>
      
    </div>
  );
};

export default Resetpassword;
