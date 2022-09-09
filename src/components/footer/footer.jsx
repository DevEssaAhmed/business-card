import React from "react";
import css from "../styles/styles.css";
import twittericon from "../media/twitter.png";
import facebookicon from "../media/fb.png";
import instaicon from "../media/insta.png";
import githubicon from "../media/git.png";

function Footer() {
  return (
    <footer>
      <a href="https://www.linkedin.com/in/essa-ahmed">
        <img className="img" src={twittericon} alt="" />
      </a>
      <a href="https://www.linkedin.com/in/essa-ahmed">
        <img className="img" src={facebookicon} alt="" />
      </a>
      <a href="https://www.linkedin.com/in/essa-ahmed">
        <img className="img" src={instaicon} alt="" />
      </a>
      <a href="https://github.com/EssaAhmd">
        <img className="img" src={githubicon} alt="" />
      </a>
    </footer>
  );
}

export default Footer;
