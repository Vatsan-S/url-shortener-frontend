import React from "react";

const LoginBanner = () => {
  return (
    <div className="bannerhalf">
      <div className="bannerContainer">
        <div className="bannerContent">
          <h4>Simplify shortening links with our tool.</h4>
          <p>
            Free URL Shortener for transforming long, ugly links into nice,
            memorable and trackable short URLs. Use it to shorten links
          </p>
        </div>

        <img
          src="./assets/img1.png"
          alt="A man with glasses smiling"
          className="bannerImg"
        />
      </div>
    </div>
  );
};

export default LoginBanner;
