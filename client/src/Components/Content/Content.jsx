import React from "react";
import "./Content.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Product from "../Product/Product";
export default function Content({ products, addCart, removeCart }) {
  return (
    <div class="wrapp">
      <div class="poster">
        <div class="text">
          <h1 class="title">Welcome! Find Your Merch!</h1>
          <p class="sub">
            We have all kinds of goodies. Click on any of the items to start
            filling up your shopping cart. Checkout whenever you're ready.
          </p>
        </div>
        <img src={require("./phone.png")} alt="logo"></img>
      </div>
      <br />
      <br />
      <h1 id="about">About</h1>
      <br />
      <br />
      <div class="about">
        <div class="atext">
          <p>
            The codepath student store offers great products at great prices
            from a great team and for a great cause.
          </p>
          <br />
          <p>
            We've searched far and wide for items that perk the interests of
            even the most eccentric students and decided to offer them all here
            in one place.
          </p>
          <br />
          <p>
            All proceeds go towards bringing high quality CS education to
            college students around the country.
          </p>
        </div>
        <div class="logo">
          <img src={require("./logo.png")} alt="logo"></img>
        </div>
      </div>
      <br />
      <br /> <br /> <br /> <br /> <br />
      <h1>Best Selling Products</h1>
      <br />
      <div id="products">
        <div id="product-grid">
          {products.map((item, index) => {
            return (
              <Product
                addCart={addCart}
                removeCart={removeCart}
                product={item}
              />
            );
          })}
        </div>
      </div>
      <br /> <br /> <br />
      <div id="contact" class="contact">
        <h1>Contact Us</h1>
        <div class="contactcontent">
          <div class="info">
            <div>Email: code@path.org</div>
            <div>Phone: 1-800-CODEPATH</div>
            <div>Address: 123 Fake Street, San Francisco, CA</div>
            <div class="sm">
              Socials:&nbsp;
              <InstagramIcon sx={{ color: "white", fontSize: 40 }} />
              <TwitterIcon sx={{ color: "white", fontSize: 40 }} />
              <FacebookIcon sx={{ color: "white", fontSize: 40 }} />
              <LinkedInIcon sx={{ color: "white", fontSize: 40 }} />
            </div>
          </div>

          <div class="media">
            <img src={require("./person.png")} alt="logo"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
