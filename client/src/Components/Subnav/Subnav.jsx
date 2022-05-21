import React from "react";

import "./Subnav.css";
import SearchIcon from "@mui/icons-material/Search";
import HelpIcon from "@mui/icons-material/Help";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import MenuIcon from "@mui/icons-material/Menu";
export default function Subnav() {
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
        <div class="cart">
          <h3 style={{ color: "white" }}>My Cart</h3>
          <ShoppingCartIcon sx={{ color: "white", fontSize: 52 }} />
        </div>
      </div>

      <div class="row">
        <MenuIcon sx={{ fontSize: 40, color: "gray" }} />

        <div class="menu">
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
      </div>
    </div>
  );
}
