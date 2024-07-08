import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const { currentUser } = useSelector((state) => state.users);
  const handleClick = () => {
    currentUser ? navigate("/landingpage") : navigate("/login");
  };
  return (
    <div>
      <div className="homeContent">
        <h3 className="homeHeading">
          A Simple link but a powerful tool for <span>youtubers.|</span>{" "}
        </h3>
        <p className="homePara">
          Our tool allows you to seemlessly track your audience with simple
          easy-to-remember yet powerful links and provide your customers a
          unique tailored experience
        </p>
        <button className="getStarted" onClick={handleClick}>
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Home;
