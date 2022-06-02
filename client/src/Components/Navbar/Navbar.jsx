import React from "react";
import "./Navbar.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Link } from "react-router-dom";
function Navbar({ setOpen }) {
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
          <a href="/#">Home</a>
          <a href="/#about">About Us</a>
          <a href="/#contact">Contact Us</a>
          <a href="/#" onClick={() => setOpen(true)}>
            Buy Now
          </a>
          <Link to="/purchases">Purchases</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
