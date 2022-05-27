import React, { useState } from "react";

import "./Categories.css";
import SearchIcon from "@mui/icons-material/Search";
import HelpIcon from "@mui/icons-material/Help";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
export default function Subnav({ active, setActive, setOpen }) {
  let [show, setShow] = useState(true);

  let cats = ["All Categories", "Clothing", "Food", "Accessories", "Tech"];

  let categories = (
    <div class="menu">
      {cats.map((item, index) => {
        if (item === active) {
          return (
            <li>
              <button
                style={{ borderBottom: "3px solid #02c385" }}
                onClick={(e) => {
                  setActive(e.target.innerHTML);
                }}
              >
                {item}
              </button>
            </li>
          );
        }
        return (
          <li>
            <button
              onClick={(e) => {
                setActive(e.target.innerHTML);
              }}
            >
              {item}
            </button>
          </li>
        );
      })}
    </div>
  );
  if (!show) {
    categories = (
      <div class="menu-close">
        <li>
          <button>All Categories</button>
        </li>
        <li>
          <button>Clothing</button>
        </li>
        <li>
          <button>Food</button>
        </li>
        <li>
          <button>Accessories</button>
        </li>
        <li>
          <button>Tech</button>
        </li>
      </div>
    );
  }
  return (
    <div class="wrap">
      <div class="row">
        <div class="searchbar">
          <input id="search" placeholder="Search..." />
          <SearchIcon
            sx={{ color: "white", fontSize: 52, background: "#02C385" }}
          />
        </div>
        <div class="help">
          <HelpIcon sx={{ fontSize: 35, color: "gray" }} />
          <h4>Help</h4>
        </div>
        <button
          class="transparent"
          onClick={() => {
            setOpen(true);
          }}
        >
          <div class="cart">
            <h3 style={{ color: "white" }}>My Cart</h3>
            <ShoppingCartIcon sx={{ color: "white", fontSize: 52 }} />
          </div>
        </button>
      </div>

      <div class="row">
        <button
          class="transparent"
          onClick={() => {
            if (show) {
              setShow(false);
            } else {
              setShow(true);
            }
          }}
        >
          <MenuIcon sx={{ fontSize: 40, color: "gray" }} />
        </button>
        {categories}
      </div>
    </div>
  );
}
