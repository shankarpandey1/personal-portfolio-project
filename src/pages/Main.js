import React from "react";
import "../styles/Main.css";


function Hello() {
  return (
    <div className="hello">
     <div className="skills">
        <h1> My Skills</h1>
        <p className="sp"><i>passionate for working as software developer</i></p>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>
              HTML, CSS, ReactJS, React Native, Redux, JavaScript, BootStrap, 
            </span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>
              NodeJS, .NET, ExpressJS, NextJS, postgreSQL
            </span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript, TypeScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Hello;
