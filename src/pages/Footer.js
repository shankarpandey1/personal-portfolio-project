import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="contact">
        <h3>Contact</h3>
          <p>Email: info@info.com</p><p>Phone: 444-444-4444</p>
        </div>
      
        
      <div className="social-media">
      <h3>Follow Me</h3>
      <ul>
      <li><InstagramIcon /></li>
      <li><TwitterIcon /></li>
      <li><FacebookIcon /></li>
      <li><LinkedInIcon /></li>
      </ul>
    </div>
<div className="container">
      <p> &copy; 2023 Shankar Pandey</p>
      </div>
    </div>
        
  </footer>  
  
);
}

export default Footer;
