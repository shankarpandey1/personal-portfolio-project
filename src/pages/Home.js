import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import "../styles/Home.css";
import Hello from './Main.js';

function Home() {
  return (
    <div className="home">
      <div className="about">
        <h2> Hi, My Name is Shankar</h2>
        <div className="prompt">
          <p>I am a junior fullstack developer.</p>
          <p><i>I am highly interested to collaborate and contribute for projects</i></p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <Hello />
    </div>
  );
}

export default Home;
