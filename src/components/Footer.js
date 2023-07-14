import React from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    
          
    <div className="footer">
      <div className="profile">
      <h3>Contact</h3>
          <p>Email: info@info.com</p>
          <p>Phone: 444-444-4444</p>
        <InstagramIcon />
        <TwitterIcon />
        <FacebookIcon />
        <LinkedInIcon />
      </div>
      <p> &copy; 2023 Shankar Pandey</p>
    </div>
    
  );
}

export default Footer;
