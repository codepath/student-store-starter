import React from "react";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import "./Footer.css";
export default function Footer() {
  return (
    <div class="ww">
      <div class="wrapper">
        <div class="links">
          <ul class="section">
            <h4>Categories</h4>
            <li>All Categories</li>
            <li>Clothes</li>
            <li>Food</li>
            <li>Accessories</li>
            <li>Tech</li>
          </ul>
          <ul class="section">
            <h4>Company</h4>
            <li>About Us</li>
            <li>Find a Store</li>
            <li>Terms</li>
            <li>Sitemap</li>
            <li>Careers</li>
          </ul>
          <ul class="section">
            <h4>Support</h4>

            <li>Contact Us</li>
            <li>Money Refund</li>
            <li>Order Status</li>
            <li>Shipping Info</li>
            <li>Open Dispute</li>
          </ul>
          <ul class="section">
            <h4>Account</h4>
            <li>Login</li>
            <li>Register</li>
            <li>Account Setting</li>
            <li>My Orders</li>
          </ul>
          <ul class="section">
            <h4>Socials</h4>
            <li>
              <FacebookIcon />
              &nbsp; Facebook
            </li>
            <li>
              <TwitterIcon />
              &nbsp; Twitter
            </li>
            <li>
              <LinkedInIcon />
              &nbsp;LinkedIn
            </li>
            <li>
              <InstagramIcon />
              &nbsp;Instagram
            </li>
            <li>
              <YouTubeIcon />
              &nbsp;Youtube
            </li>
          </ul>
          <ul class="section">
            <h4>Our App</h4>
            <img src={require("./app.png")} width="75%" />
            <img src={require("./app2.png")} width="80%" />
          </ul>
        </div>
        <br /> <br /> <br /> <br /> <br /> <br />
      </div>
    </div>
  );
}
