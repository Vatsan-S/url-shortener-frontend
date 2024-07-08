import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const Activation = () => {
  const { id, username } = useParams();
  const navigate = useNavigate();
  const payload = {
    id: id,
    username: username,
  };
  const activation = async () => {
    await axios
      .post("http://localhost:4000/api/user/activation", payload)
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      });
  };
  useEffect(() => {
    activation();
  }, []);
  return (
    <div className="container">
      <h1>Account Activated</h1>
    </div>
  );
};

export default Activation;
