import React from "react";
import "./Content.css";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import Product from "../Product/Product";
export default function Content({ products }) {
  console.log(products);
  return (
    <div class="wrap">
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
      <h1>About</h1>
      <br />
      <br />
      <div class="about">
        <div class="atext">
          <p>
            The codepath student store offers great products at great prices
            from a great team and for a great cause.
          </p>
          <p>
            We've searched far and wide for items that perk the interests of
            even the most eccentric students and decided to offer them all here
            in one place.
          </p>
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
      <div id="products">
        <div id="product-grid">
          {products.map((item, index) => {
            return <Product product={item} />;
          })}
        </div>
      </div>
      <br /> <br /> <br />
      <div class="contact">
        <h1>Contact Us</h1>
        <div class="contactcontent">
          <div>
            <ul class="info">
              <li>
                <span>Email:</span> code@path.org
              </li>
              <li>
                <span>Phone:</span> 1-800-CODEPATH
              </li>
              <li>
                <span>Address:</span> 123 Fake Street, San Francisco, CA
              </li>
              <li>
                <span>Socials:</span>
                <span>
                  <InstagramIcon style={{ color: "white" }} />
                  <TwitterIcon style={{ color: "white" }} />
                  <FacebookIcon style={{ color: "white" }} />
                  <LinkedInIcon style={{ color: "white" }} />
                </span>
              </li>
            </ul>
          </div>
          <div class="media">
            <img src={require("./person.png")} alt="logo"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
