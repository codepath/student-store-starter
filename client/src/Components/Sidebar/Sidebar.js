import React from "react";
import axios from "axios";
import "./Sidebar.css";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import MonetizationOnIcon from "@mui/icons-material/MonetizationOn";
import FactCheckIcon from "@mui/icons-material/FactCheck";

export default function Sidebar() {
  return (
    <div class="sidebar">
      <div class="expand">stuff</div>
      <div class="content">
        <ArrowForwardIcon sx={{ color: "white", fontSize: 50 }} />
        <div class="icons">
          <AddShoppingCartIcon sx={{ color: "white", fontSize: 50 }} />
          <MonetizationOnIcon sx={{ color: "white", fontSize: 50 }} />
          <FactCheckIcon sx={{ color: "white", fontSize: 50 }} />
        </div>
      </div>
    </div>
  );
}
