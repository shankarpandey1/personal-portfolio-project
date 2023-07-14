import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GithubIcon from "@material-ui/icons/GitHub";
import Footer from "./Footer";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home">
      <h1> Personal Portfolio Project</h1>
      <div className="about">
      
        <h2> Hi, I'm Shankar</h2>
        <div className="prompt">
          <p>I am a junior fullstack developer.</p>
          <p><i>I am highly interested to collaborate and contribute for projects</i></p>
          <LinkedInIcon />
          <EmailIcon />
          <GithubIcon />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
