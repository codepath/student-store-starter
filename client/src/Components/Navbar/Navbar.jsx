import React from "react";
import axios from "axios";
import "./Navbar.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";

function Navbar() {
  return (
    <header>
      <nav class="navbar">
        <div class="logos">
          <img src={require("./logo.png")} alt="logo" width="80px"></img>

          <div class="social">
            <InstagramIcon style={{ color: "white" }} />
            <TwitterIcon style={{ color: "white" }} />
            <FacebookIcon style={{ color: "white" }} />
          </div>
        </div>
        <div class="nav">
          <a href="#">Home</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
          <a href="#">Buy Now</a>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
