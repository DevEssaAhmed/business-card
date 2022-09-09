import React from "react";
import css from "../styles/styles.css";
import emailicon from "../media/gmail.svg";
import linkedinicon from "../media/linkedin.svg";

function LowerContainer() {
  return (
    <div className="lowercontainer">
      <h1>Essa Ahmed</h1>
      <h3>Frontend Developer</h3>
      <div className="button-container">
        <div className="email-button">
          <a href="mailto:essaahmedsiddiqui@gmail.com">
            <img className="img" src={emailicon} alt="" />
            Email
          </a>
        </div>
        <div className="linkedin-button">
          <a href="https://www.linkedin.com/in/essa-ahmed">
            <img className="img" src={linkedinicon} alt="" />
            Linkedin
          </a>
        </div>
      </div>
      <div className="text">
        <h1>About</h1>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h1>Interests</h1>
        <p>
          Reader. Internet fanatic. Tech Enthusiast.
          Entrepreneur. Travel geek. 
        </p> 
      </div>
    </div>
  );
}

export default LowerContainer;
