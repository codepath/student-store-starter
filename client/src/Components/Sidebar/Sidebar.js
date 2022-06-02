import React from "react";
import axios from "axios";
import "./Sidebar.css";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import FactCheckIcon from "@mui/icons-material/FactCheck";
import { useState } from "react";
export default function Sidebar({ cart, setCart, open, setOpen }) {
  async function purchase() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let check = document.getElementById("check");
    if (!name || !email || !check.checked || cart.length <= 0) {
      alert("Invalid purchase");
      return;
    }

    let userInfo = { email: email, name: name };
    let data = { userInfo, cart };

    await axios.post(`http://localhost:3001/store`, data);
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    check.checked = false;
    setCart([]);
  }

  let closed = (
    <div class="sidebar">
      <div class="content">
        <button class="transparent" onClick={() => setOpen(true)}>
          <ArrowForwardIcon sx={{ color: "white", fontSize: 50 }} />
        </button>
        <div class="icons">
          <AddShoppingCartIcon sx={{ color: "white", fontSize: 50 }} />
          <MonetizationOnIcon sx={{ color: "white", fontSize: 50 }} />
          <FactCheckIcon sx={{ color: "white", fontSize: 50 }} />
        </div>
      </div>
    </div>
  );
  let cartList = (
    <div id="cart-table">
      <div class="cart-sectt">
        <h2>Name</h2>
        <h2>Quantity</h2>
        <h2>Unit Price</h2>
        <h2>Cost</h2>
      </div>
      {cart.map((item, index) => {
        let cost = (item.quantity * item.price).toFixed(2);
        return (
          <div class="cart-sect">
            <p>{item.name}</p>
            <p>{item.quantity}</p>
            <p>${item.price}</p>
            <p>${cost}</p>
          </div>
        );
      })}
    </div>
  );
  if (cart.length <= 0) {
    cartList = <div></div>;
  }
  let opened = (
    <div class="sidebar-open">
      <div class="full">
        <button class="transparent" onClick={() => setOpen(false)}>
          <ArrowBackIcon sx={{ color: "white", fontSize: 50 }} />
        </button>

        <div class="icons">
          <div class="inline">
            <h2>Shopping Cart</h2>
            <AddShoppingCartIcon sx={{ color: "white", fontSize: 50 }} />
          </div>
          {cartList}
          <p>No items added to cart yet. Start shopping now!</p>
          <div class="inline">
            <h2>Payment Info</h2>
            <MonetizationOnIcon sx={{ color: "white", fontSize: 50 }} />
          </div>
          <form action="#" id="form" onSubmit={purchase}>
            <p>Name</p>
            <br />
            <input id="name" placeholder="Name" />
            <br />
            <p>Email</p>
            <br />
            <input id="email" placeholder="Email" />

            <div class="inlines">
              <input id="check" type="checkbox" />
              <span class="terms">
                I agree to the{" "}
                <span class="terms" style={{ color: "#02c385" }}>
                  terms and conditions
                </span>
              </span>
            </div>

            <button class="submitButton">Submit</button>
          </form>

          <div class="inline">
            <h2>Checkout Info </h2>
            <FactCheckIcon sx={{ color: "white", fontSize: 50 }} />
          </div>
          <div class="conf">
            <p>
              A confirmation email will be sent to you so that you can confirm
              this order. Once you have confirmed the order, it will be
              delivered to your dorm room.
            </p>
          </div>
          <br />
          <br />
        </div>
      </div>
    </div>
  );

  let choice = open ? opened : closed;

  return <div>{choice}</div>;
}
